/**
 * Created by anurag on 16/5/17.
 */
const commentService = require('./comment.service');
const commentValidate = require('./comment.validate');

exports.addComment = (req,res,next) => {
    const dataPass = {
        comment: req.body.comment,
        commentedBy: req.user._id,
        commentedOn: req.body.postId
    };
    if(commentValidate.commentValidator(dataPass)){
        commentService.addComment(dataPass,res);
    }else{
        res.send({'msg': 'Invalid Data'})
    }
};

exports.getComments = (req,res,next) => {
    console.log('get comments -----------',req.query);
    //commentService.getComments(res);
};
