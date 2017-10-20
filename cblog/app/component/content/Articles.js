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
                                <Card title={i.get('title')} style={{marginBottom: 20, height: 260}} onClick={() => {
                                    this.goToArticle(i.get('_id'))
                                }}>
                                    {i.get('content')}
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
