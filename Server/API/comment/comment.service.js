/**
 * Created by anurag on 16/5/17.
 */
const Comment = require('./comment.model');
const Post = require('./../posts/posts.model');
const getPost = require('./../posts/posts.service');

exports.addComment = (data,res) => {
    Comment.create(data,(err,data)=> {
        if(err){
            res.send(err);
        }else{
            postComments(data,res);
        }
    });
};
/*exports.getComments = (res) => {
    Comment.find({}).sort({createdAt: -1})
        .populate('commentedBy').populate('commentedOn')
        .exec((err,data)=>{
            if(err){
                res.send(err);
            }else{
                res.send(data);
            }
        })
}*/

const postComments = (commentObject,res)=> {
    Post.update({_id:commentObject.commentedOn},{$push: {comments: commentObject._id}},(err,data) => {
        if(err){
            console.log(err);
        }else{
            getPost.getUpdatedPost(commentObject.commentedOn,res);
        }
    });
};
