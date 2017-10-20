/**
 * Created by easterCat on 2017/10/13.
 */

import React from 'react';
import {connect} from 'react-redux';
import {createOneArticle} from './article.actions';
import {Input, Button, message} from 'antd';

class createArticle extends React.Component {
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
            this.props.createOneArticle(data)
                .then(() => {
                    message.info('创建一篇新文章成功');
                });

        }
    }


    render() {

        return (
            <div>
                <div className="form-item">
                    <div className="form-label"><span>标题</span></div>
                    <div className="form-input">
                        <Input type="text" placeholder="标题" onChange={this.titleChange}/>
                    </div>
                </div>
                <div className="form-item">
                    <div className="form-label"><span>内容</span></div>
                    <div className="form-input">
                        <Input type="textarea" placeholder="内容" rows={10} cols={30} onChange={this.contentChange}/>
                    </div>
                </div>
                <div>
                    <Button type="primary" onClick={this.confirmBtn}>确定</Button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {}
};
const mapActionCreators = {
    createOneArticle
};

export default connect(mapStateToProps, mapActionCreators)(createArticle);
