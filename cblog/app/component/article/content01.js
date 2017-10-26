/**
 * Created by easterCat on 2017/10/13.
 */

import React from 'react';
import {Table, Icon, Button} from 'antd';
import {connect} from 'react-redux';
import {addOneUser} from './article.actions';
import FromContent from './FromContent';

class Content01 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            date: null
        };
        this.showModal = () => {
            this.setState({
                visible: true,
                data: new Date()
            });
            console.log('hello world');
        };
        this.closeModal = () => {
            this.setState({
                visible: false,
            });
        };

        this.submit = (values) => {
            values.key = Date.parse(new Date());
            this.props.addOneUser(values);
            this.closeModal();
        }
    }

    componentDidMount() {
        const {history, user} = this.props;
        if (!user) {
            history.replace('/login');
        }
    }

    render() {
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '电话号码',
            dataIndex: 'phone',
            key: 'phone',
        }, {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        }];

        const data = this.props.data.toJS();

        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    <Icon type="user-add"/>添加
                </Button>
                <Table columns={columns} dataSource={data}/>
                {
                    this.state.visible ? <FromContent date={this.state.date}
                                                      submit={this.submit}
                                                      showModal={this.showModal}
                                                      closeModal={this.closeModal}
                    /> : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.get('article').get('data'),
        user: state.get('user').get('user')
    }
};

const mapActionCreators = {
    addOneUser
};

export default connect(mapStateToProps, mapActionCreators)(Content01);
