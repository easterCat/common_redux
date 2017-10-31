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

    }

    componentDidMount() {

    }

    render() {


        return (
            <div>
                <audio
                    src="http://vali.cp31.ott.cibntv.net/youku/697288884233A716CAD3640E7/03000801005809EB53D0F8068872C9B8E8EA74-A76C-697D-2DEB-373EC9A12A9C.mp4?sid=050943667986318634312_00_A3498e8ed4cc3b1edb5c7939c6e193450&sign=6c5f176dc627843d71081b51430f6e98&ctype=50"></audio>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(Content01);
