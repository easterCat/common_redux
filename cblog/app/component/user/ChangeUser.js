/**
 * Created by easterCat on 2017/11/6.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Form, Icon, Input, Button, Upload, message} from 'antd';
import {server} from '../../../app.config';

import {updateUser} from './user.actions';

class ChangeUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDisabled: true
        };

        let data = {
            id: this.props.user.get('_id'),
            username: this.props.user.get('username'),
            password: this.props.user.get('password'),
            avatar: this.props.user.get('avatar'),
            description: this.props.user.get('description'),
        };
        this.changeInput = (e, status) => {
            data[status] = e.target.value;
        };

        this.closeDisabled = () => {
            this.setState({
                isDisabled: false
            })
        };
        this.openDisabled = () => {
            this.props.updateUser(data)
                .then(() => {
                    message.success(`修改用户信息成功!`);
                    this.setState({
                        isDisabled: true
                    })
                });
        };
    }


    render() {
        const upload_props = {
            name: "avatar",
            listType: 'picture',
            multiple: false,
            action: `${server}/file/picture`,
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };


        return (
            <div className="change-user">

                {
                    this.props.user && this.props.user.size ? <div className="form-con">
                        {
                            this.state.isDisabled ? <Icon type="edit" onClick={this.closeDisabled}/> :
                                <Icon type="check" onClick={this.openDisabled}/>
                        }
                        <FormItem status="username" label="名称" type="text"
                                  defaultValue={this.props.user.get('username')}
                                  isDisabled={this.state.isDisabled} changeInput={this.changeInput}/>
                        <FormItem status="password" label="密码" type="password"
                                  defaultValue={this.props.user.get('password')}
                                  isDisabled={this.state.isDisabled} changeInput={this.changeInput}/>

                        <div className="form-item">
                            <div className="form-label">
                                头像:
                            </div>
                            <div className="form-input">
                                <Upload {...upload_props}>
                                    <Button>
                                        <Icon type="upload"/> Click to Upload
                                    </Button>
                                </Upload>
                            </div>
                        </div>
                        <FormItem status="description" label="简介" type="textarea"
                                  defaultValue={this.props.user.get('description')}
                                  isDisabled={this.state.isDisabled} changeInput={this.changeInput}/>
                        <Link to="/home">
                            <a href="">首页</a>
                        </Link>
                    </div>  : null
                }
            </div>
        )
    }
}


function FormItem(props) {
    const {
        label,
        type,
        defaultValue,
        isDisabled,
        changeInput,
        status
    } = props;

    let input_type;
    if (type === 'textarea') {
        input_type = <textarea cols="30" rows="6" defaultValue={defaultValue}
                               disabled={isDisabled} onChange={(e) => {
            changeInput(e, status);
        }}></textarea>
    } else {
        input_type = <input type={type} defaultValue={defaultValue} disabled={isDisabled} onChange={(e) => {
            changeInput(e, status);
        }}/>
    }

    return (
        <div className="form-item">
            <div className="form-label">
                {label}:
            </div>
            <div className="form-input">
                {input_type}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.get('session').get('user')
    }
};

const mapActionCreators = {
    updateUser
};

export default connect(mapStateToProps, mapActionCreators)(ChangeUser);