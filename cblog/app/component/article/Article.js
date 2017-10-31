/**
 * Created by easterCat on 2017/10/20.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Input, Button, message} from 'antd';
import {
    getOneArticle,
    addOneComment,
    getComments,
    removeCommentById,
    getAllAuthors
} from './article.actions';
import no_pic from '../../images/no_pic.jpg';
import {server} from '../../../app.config';

class Article extends React.Component {

    constructor(props) {
        super(props);
        let data = {};
        this.getCommentTxt = e => {
            data.content = e.target.value;
        };

        this.sendComment = () => {
            data.articleid = this.props.article.get('_id');
            data.author = this.props.user.get('_id');
            this.props.addOneComment(data)
                .then(() => {
                    message.success('发表成功');
                })
                .catch((error) => {
                    message.error(error);
                })
        };

        this.deleteComment = id => {
            this.props.removeCommentById(id)
                .then(() => {
                    message.success('删除一条留言成功');
                })
                .catch(error => {
                    message.error(error);
                })
        };

        this.matchCommentUser = (id) => {
            if (this.props.authors && this.props.authors.size) {
                let author = this.props.authors.filter(i => {
                    return i.get('_id') === id;
                });
                console.log(author.toJS());
                if (author && author.size) return author;
            }
        }
    }

    componentWillMount() {
        const {
            match,
            getOneArticle,
            getAllAuthors
        } = this.props;
        let id = match.params.id;
        return Promise.all([
            getOneArticle(id),
            getAllAuthors()
        ])
            .then(() => {
                let articleid = this.props.article.get('_id');
                //通过articleid查找所有的留言
                if (articleid) {
                    this.props.getComments(articleid);
                }
            });
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
                        article ? <div dangerouslySetInnerHTML={{__html: article.get('content')}}
                                       className="markdown-body"></div> : '没有相应文章'
                    }
                </div>
                <div className="comment">
                    <p>留言</p>
                    <Input className="comment-textarea" type="textarea" rows={4} onChange={this.getCommentTxt}/>
                    <Button className="comment-btn" icon="edit" type="primary" onClick={this.sendComment}>发表</Button>
                </div>

                <div className="show-comments">
                    <ul>
                        {
                            this.props.comments ? this.props.comments.map(i => {
                                return <li key={i.get('_id')} className="comments-item">
                                    <div className="avatar">

                                           <img
                                               src={`${server}/file/picture/${this.matchCommentUser(i.get('author')).getIn([0, 'avatar'])}`}
                                               alt=""/>

                                        <p className="user-name">{`${this.matchCommentUser(i.get('author')).getIn([0, 'username'])}`}</p>
                                        <p className="create-time">{new Date(i.get('createDate')).toLocaleString().split(' ')[0]}</p>
                                    </div>
                                    <div className="right">
                                        <div dangerouslySetInnerHTML={{__html: i.get('content')}}
                                             className="markdown-body content"></div>
                                        <Button className="del-btn" type="primary" onClick={() => {
                                            this.deleteComment(i.get('_id'))
                                        }}>删除</Button>
                                    </div>
                                </li>
                            }) : '暂无留言'
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        article: state.get('article').get('article'),
        user: state.get('session').get('user'),
        comments: state.get('article').get('comments'),
        authors: state.get('article').get('authors')
    }
};
const mapActionCreators = {
    getOneArticle,
    addOneComment,
    getComments,
    removeCommentById,
    getAllAuthors
};
export default connect(mapStateToProps, mapActionCreators)(Article);