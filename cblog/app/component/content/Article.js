/**
 * Created by easterCat on 2017/10/20.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Card, Col, Row} from 'antd';
import {getOneArticle} from './article.actions';
class Article extends React.Component {

    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.getOneArticle(id);
    }

    render() {
        const {article} = this.props;
        return (
            <div>
                <div className="article-title">
                    {
                        article ? article.get('title') : '没有相应文章'
                    }
                </div>
                <div className="article-content">
                    {
                        article ? article.get('content') : '没有相应文章'
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        article: state.get('article').get('article')
    }
};
const mapActionCreators = {
    getOneArticle
};
export default connect(mapStateToProps, mapActionCreators)(Article);