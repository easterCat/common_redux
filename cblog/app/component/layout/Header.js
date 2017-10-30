/**
 * Created by easterCat on 2017/10/10.
 */
import React from 'react';
import {connect} from 'react-redux';
import avatar_img from '../../images/avatar.jpg';
import {Icon, Menu, Dropdown, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {server} from '../../../app.config';
import {logout} from '../user/user.actions';

class Header extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        const {history, user} = this.props;
        if (!user) {
            history.replace('/login');
        }
    }

    render() {
        const {
            collapsed,
            toggle
        } = this.props;

        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/login">登录</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/register">注册</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/login" onClick={this.props.logout}>退出</Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <div className="layout-header">
                <Icon className="trigger"
                      type={collapsed ? 'menu-unfold' : 'menu-fold'}
                      onClick={toggle}
                />
                <Dropdown overlay={menu}>
                    <Avatar className="avatar"
                            src={this.props.user.get('avatar') ? `${server}/file/picture/${this.props.user.get('avatar')}` : avatar_img}/>
                </Dropdown>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.get('user').get('user')
    }
};

const mapActionCreators = {
    logout
};

export default connect(mapStateToProps, mapActionCreators)(Header);