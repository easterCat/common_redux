/**
 * Created by easterCat on 2017/10/20.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Input, Button, message} from 'antd';
import {getOneArticle, addOneComment, getComments, removeCommentById} from './article.actions';
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
            this.props.removeCommentById(id);
        }
    }

    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.getOneArticle(id)
            .then(() => {
                let articleid = this.props.article.get('_id');
                if (articleid) {
                    this.props.getComments(articleid);
                }
            })
            .catch(error => {
                console.log(error);
            })
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
                                return <li key={i.get('_id')} className="comments-item">{i.get('content')} <Button
                                    type="primary" onClick={() => {
                                    this.deleteComment(i.get('_id'))
                                }
                                }>删除</Button></li>
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
        user: state.get('user').get('user'),
        comments: state.get('article').get('comments')
    }
};
const mapActionCreators = {
    getOneArticle,
    addOneComment,
    getComments,
    removeCommentById
};
export default connect(mapStateToProps, mapActionCreators)(Article);