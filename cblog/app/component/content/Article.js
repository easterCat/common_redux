/**
 * Created by easterCat on 2017/10/20.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Card, Col, Row} from 'antd';
import {getAllArticles} from './article.actions';
class Article extends React.Component {

    componentWillMount() {
        this.props.getAllArticles();
    }

    render() {
        const {articles} = this.props;
        return (
            <div>
                <div className="article-title"></div>
                <div className="article-content"></div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        articles: state.get('article').get('articles')
    }
};
const mapActionCreators = {
    getAllArticles
};
export default connect(mapStateToProps, mapActionCreators)(Article);