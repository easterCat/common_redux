/**
 * Created by easterCat on 2017/10/9.
 */
import React from 'react';
import {connect} from 'react-redux';
import {matchPath} from 'react-router-dom';
import Header from '../layout/Header';
import Content from '../layout/Content';
import Sidebar from '../layout/Sidebar';
import {Layout} from 'antd';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
        this.ress = ['content01', 'createArticle', 'articles'];
        this.res = null;
        const match = matchPath(this.props.history.location.pathname, {
            path: '/home/:res'
        });
        if (match) {
            this.res = match.params.res;
        }

        this.toggle = () => {
            this.setState({
                collapsed: !this.state.collapsed
            })
        };
    }

    componentWillMount() {
        if (!this.res || !this.res.length || this.ress.indexOf(this.res) === -1) {
            this.props.history.replace(`/home/content01`)
        }
    }

    componentDidMount() {
        const {history, user} = this.props;
        if (!user) {
            history.replace('/login');
        }
    }

    render() {
        return (
            <Layout className="layout-app">
                <Layout.Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <Sidebar res={this.res}/>
                </Layout.Sider>
                <Layout>
                    <Layout.Header style={{background: '#fff', padding: 0}}>
                        <Header collapsed={this.state.collapsed}
                                toggle={this.toggle}
                        />
                    </Layout.Header>
                    <Layout.Content className="r-b-content" style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                    }}>
                        <Content/>
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.get('user').get('user')
    }
};

const mapActionCreators = {};
export default connect(mapStateToProps, mapActionCreators)(Home);