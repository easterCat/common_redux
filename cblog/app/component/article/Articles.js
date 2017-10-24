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
            <div>
                <Row gutter={16}>
                    {
                        articles && articles.size ? articles.map(i => {
                            return <Col xs={24} md={12} xl={8} key={i.get('_id')}>
                                <Card title={i.get('title')} style={{marginBottom: 20, height: 228}} onClick={() => {
                                    this.goToArticle(i.get('_id'))
                                }}>
                                    <div className="custom-card">
                                        <div className="card-mask"></div>
                                        <pre dangerouslySetInnerHTML={{__html: i.get('content')}}
                                             className="card-content markdown-body"></pre>
                                        <Icon type="delete" onClick={(e) => {
                                            this.deleteOneArticle(e, i.get('_id'))
                                        }}/>
                                        <span>{new Date(i.get('createDate')).toLocaleString()}</span>
                                    </div>
                                </Card>
                            </Col>
                        }) : null
                    }
                </Row>
                <Pagination defaultCurrent={1} total={50} onChange={this.changePageNum}/>
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
