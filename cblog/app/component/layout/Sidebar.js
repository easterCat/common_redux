/**
 * Created by easterCat on 2017/10/10.
 */
import React from 'react';
import {Menu, Icon} from 'antd';
import {NavLink} from 'react-router-dom';

class Sidebar extends React.Component {
    render() {
        const {
            res
        } = this.props;
        return (
            <div className="layout-sidebar">
                <div className="logo"/>
                <Menu theme="dark"
                      mode="inline"
                      defaultSelectedKeys={[res]}
                >
                    <Menu.Item key="content01">
                        <NavLink to="/home/content01">
                            <Icon type="user"/>
                            <span>nav 1</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="content02">
                        <NavLink to="/home/content02">
                            <Icon type="video-camera"/>
                            <span>nav 2</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="content03">
                        <NavLink to="/home/content03">
                            <Icon type="upload"/>
                            <span>nav 3</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Sidebar;