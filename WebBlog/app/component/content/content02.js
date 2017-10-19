/**
 * Created by easterCat on 2017/10/13.
 */

import React from 'react';
import {connect} from 'react-redux';
import {addOneArticle} from './content01.actions';

class Content02 extends React.Component {
    constructor(props) {
        super(props);

        let data = {};
        this.titleChange = (e) => {
            data.title = e.target.value;
        };
        this.contentChange = (e) => {
            data.content = e.target.value;
        };

        this.confirmBtn = () => {
            this.props.addOneArticle(data);
        }
    }


    render() {

        return (
            <div>
                <div>
                    <span>标题</span>
                    <input type="text" onChange={this.titleChange}/>
                </div>
                <div>
                    <span>内容</span>
                    <textarea cols="30" rows="10" onChange={this.contentChange}></textarea>
                </div>
                <div>
                    <button onClick={this.confirmBtn}>确定</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {}
};
const mapActionCreators = {
    addOneArticle
};

export default connect(mapStateToProps, mapActionCreators)(Content02);
