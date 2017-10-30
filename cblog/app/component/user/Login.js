/**
 * Created by easterCat on 2017/10/13.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Form, Icon, Input, Button, Checkbox, Upload, message} from 'antd';
const FormItem = Form.Item;
import {server} from '../../../app.config';
import {login} from './user.actions';

class Logining extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = (e) => {
            const {
                history,
            } = this.props;

            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    let user = {};
                    user.password = values.password;
                    user.username = values.username;

                    this.props.login(user)
                        .then(() => {
                            if (this.props.user) {
                                message.success('登录成功');
                                setTimeout(() => {
                                    history.replace('/home')
                                }, 1000);
                            } else {
                                message.error(`登录失败`);
                            }
                        })
                        .catch((error) => {
                            message.error(`登录失败${error}`);
                        })
                }
            });
        };
    }

    componentDidMount() {
        // const {user, history} = this.props;
        // if (user) {
        //     history.replace('/home');
        // }
    }

    render() {
        const {
            getFieldDecorator
        } = this.props.form;

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
                    <FormItem>
                        {/*{getFieldDecorator('remember', {*/}
                        {/*valuePropName: 'checked',*/}
                        {/*initialValue: true,*/}
                        {/*})(*/}
                        {/*<Checkbox>记住我</Checkbox>*/}
                        {/*)}*/}
                        <a className="login-form-forgot" href="">忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        <Link to="/register">
                            <a href="">注册</a>
                        </Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const Login = Form.create()(Logining);

const mapStateToProps = (state) => {
    return {
        user: state.get('session').get('user')
    }
};

const mapActionCreators = {
    login
};
export default connect(mapStateToProps, mapActionCreators)(Login);