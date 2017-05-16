/**
 * Created by anurag on 16/5/17.
 */
const commentService = require('./comment.service');

exports.addComment = (req,res,next) => {
    const dataPass = {
        comment: req.body.comment,
        commentedBy: req.user._id,
        commentedOn: req.body.postId
    }
    commentService.addComment(dataPass,res);
}
exports.getComments = (req,res,next) => {
    commentService.getComments(res);
}