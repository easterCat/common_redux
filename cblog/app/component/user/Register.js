/**
 * Created by easterCat on 2017/10/13.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Form, Icon, Input, Button, Upload, message} from 'antd';
const FormItem = Form.Item;
import {server} from '../../../app.config';
import {register} from './user.actions';

class Registering extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = (e) => {
            const {
                history
            } = this.props;

            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {

                    let user = {};
                    user.avatar = values.avatar[0].response ? values.avatar[0].response._id : null;
                    user.description = values.description;
                    user.password = values.password;
                    user.username = values.username;

                    this.props.register(user)
                        .then((result) => {
                            if (result.code && result.code === 2) {
                                message.error('相同用户已经存在!');
                            } else {
                                message.success('注册成功');
                                setTimeout(() => {
                                    history.replace('/login');
                                }, 1000);
                            }
                        })
                        .catch((error) => {
                            message.error(`注册失败${error}`);
                        })
                }
            });
        };

        this.normFile = e => {
            console.log('Upload event:', e);
            if (Array.isArray(e)) {
                return e;
            }
            return e && e.fileList;
        };

        this.checkPassword = (rule, value, callback) => {
            const form = this.props.form;
            if (value && value !== form.getFieldValue('password')) {
                callback('两次输入的密码不一样!');
            } else {
                callback();
            }
        }
    }

    render() {
        const {
            getFieldDecorator
        } = this.props.form;

        const upload_props = {
            name: "avatar",
            listType: 'picture',
            multiple: false,
            action: `${server}/file/picture`,
        };

        return (
            <div className="login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: '请输入您的用户名!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="请输入您的用户名"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入您的密码!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                   placeholder="请输入您的密码"/>
                        )}
                    </FormItem>
                    <FormItem hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: '请再次输入您的密码!',
                            }, {
                                validator: this.checkPassword,
                            }],
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                   placeholder="请再次输入您的密码"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('avatar', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload {...upload_props}>
                                <Button>
                                    <Icon type="upload"/>点击上传头像
                                </Button>
                            </Upload>
                        )}
                    </FormItem>
                    <FormItem >
                        {getFieldDecorator('description')(<Input type="textarea" placeholder="请输入个人简介"/>)}
                    </FormItem>
                    <FormItem>
                        <a className="login-form-forgot" href="">忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            注册
                        </Button>
                        <Link to="/login">
                            <a href="">登录</a>
                        </Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const Register = Form.create()(Registering);

const mapStateToProps = (state) => {
    return {}
};

const mapActionCreators = {
    register
};
export default connect(mapStateToProps, mapActionCreators)(Register);