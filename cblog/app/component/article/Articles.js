/**
 * Created by easterCat on 2017/10/13.
 */

import React from 'react';
import {connect} from 'react-redux';
import {Card, Col, Row, Pagination, Icon} from 'antd';
import {getAllArticles, deleteArticleById} from './article.actions';

class Articles extends React.Component {

    constructor(props) {
        super(props);

        this.goToArticle = (id) => {
            const {history} = this.props;
            console.log(id);
            history.push(`/home/article/${id}`);
        };

        //页码改变后的回调函数
        this.changePageNum = (page, pagesize) => {
            console.log(page);
            this.props.getAllArticles(page);
        };

        this.deleteOneArticle = (e, id) => {
            e.stopPropagation();
            this.props.deleteArticleById(id);
        };
    }

    componentWillMount() {
        //初始化加载前10篇文章
        this.props.getAllArticles(1);
    }

    render() {
        const {articles} = this.props;

        return (
            <div className="articles-content">

                {
                    articles && articles.size ? articles.map(i => {
                        return <div key={i.get('_id')} className="articles-item" onClick={() => {
                            this.goToArticle(i.get('_id'))
                        }}>
                            <div className="item-title">
                                {i.get('title')}
                            </div>
                            <div className="item-detail">
                                Create by easterCat <span></span> at {new Date(i.get('createDate')).toLocaleString()}
                            </div>
                            <div dangerouslySetInnerHTML={{__html: i.get('content')}}
                                 className="item-content markdown-body">
                            </div>
                        </div>
                    }) : null
                }

                <div className="plu-Pagination">
                    <Pagination defaultCurrent={1} total={50} onChange={this.changePageNum}/>
                </div>
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
    getAllArticles,
    deleteArticleById
};
export default connect(mapStateToProps, mapActionCreators)(Articles);
