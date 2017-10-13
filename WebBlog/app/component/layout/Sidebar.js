/**
 * Created by easterCat on 2017/10/10.
 */
import React from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="layout-sidebar">
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/home/content01">
                            <Icon type="user"/>
                            <span>nav 1</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/home/content02">
                            <Icon type="video-camera"/>
                            <span>nav 2</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/home/content03">
                            <Icon type="upload"/>
                            <span>nav 3</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Sidebar;