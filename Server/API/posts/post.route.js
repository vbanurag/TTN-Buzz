/**
 * Created by anurag on 9/5/17.
 */
const checkLoginMiddleware = require('./../../MIddlewares/logged.check');
const postController = require('./../../API/posts/posts.controller');

module.exports = (app) => {
    const allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', 'http://anuragsharma.com:9000');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header("Access-Control-Allow-Headers","Content-Type, Authorization");
        /*console.log(req.originalUrl,'cors')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header("Access-Control-Allow-Origin" , 'http://anuragsharma.com:9000')*/
        res.header("Access-Control-Allow-Credentials" , true );
        next();
    }
    app.use(allowCrossDomain);
    app.post('/api/posts' ,(req,res,next)=> {console.log(req.isAuthenticated(),'------check');next()},
        checkLoginMiddleware.isLoggedIn,
        postController.createPost
    )
    app.get('/api/posts',
        checkLoginMiddleware.isLoggedIn,
        postController.getPosts
    )
    app.put('/api/posts/like_dislike',
        checkLoginMiddleware.isLoggedIn,
        postController.updateLikeDislike
    )

}