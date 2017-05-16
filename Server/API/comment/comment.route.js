/**
 * Created by anurag on 16/5/17.
 */
const checkLoginMiddleware = require('./../../MIddlewares/logged.check');
const commentController = require('./comment.controller');

module.exports = (app) => {
    app.put('/api/comment',
        checkLoginMiddleware.isLoggedIn,
        commentController.addComment
    )
    app.get('/api/comment',
        checkLoginMiddleware.isLoggedIn,
        commentController.getComments
    )
}