/**
 * Created by easterCat on 2017/10/10.
 */
import React from 'react';
import avatar_img from '../../images/avatar.jpg';
import {Icon, Avatar} from 'antd';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            collapsed,
            toggle
        } = this.props;

        return (
            <div className="layout-header">
                <Icon
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={toggle}
                />
                <Avatar className="avatar"
                        src={avatar_img}/>
            </div>
        )
    }
}
export default Header;