/**
 * Created by easterCat on 2017/10/10.
 */
import React from 'react';
import avatar_img from '../../images/avatar.jpg';
import {Icon, Menu, Dropdown, Avatar} from 'antd';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            collapsed,
            toggle
        } = this.props;

        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/login">
                        登录
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer">注册</a>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/login">
                        退出
                    </Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <div className="layout-header">
                <Icon
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={toggle}
                />
                <Dropdown overlay={menu}>
                    <Avatar className="avatar"
                            src={avatar_img}/>
                </Dropdown>
            </div>
        )
    }
}
export default Header;