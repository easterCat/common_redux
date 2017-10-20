/**
 * Created by easterCat on 2017/10/13.
 */

import React from 'react';
import {connect} from 'react-redux';
import {Card, Col, Row} from 'antd';
import {getAllArticles} from './article.actions';

class Articles extends React.Component {

    constructor(props) {
        super(props);

        this.goToArticle = (id) => {
            const {history} = this.props;
            console.log(id);
            history.push(`/home/article/${id}`);
        }
    }

    componentWillMount() {
        this.props.getAllArticles();
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
                                        <p>
                                            {i.get('content')}
                                        </p>
                                        <span>{new Date(i.get('createDate')).toLocaleString()}</span>
                                    </div>
                                </Card>
                            </Col>
                        }) : null
                    }
                </Row>
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
export default connect(mapStateToProps, mapActionCreators)(Articles);
