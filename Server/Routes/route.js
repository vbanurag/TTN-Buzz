/**
 * Created by anurag on 5/5/17.
 */
const userController = require('./../API/User/user.controller');
const passport = require('passport');
const googlePassport = require('./../Passport/google.auth');
const session = require('express-session');
const cors = require('cors');
const checkLoginMiddleware = require('./../MIddlewares/logged.check');
const PostsRoute = require('./../API/posts/post.route');
const commentRoute = require('./../API/comment/comment.route');
const complaintRoute = require('./../API/Complaints/complaints.route');

module.exports= (app)=>{
    const allowCrossDomain = function(req, res, next) {
        /*res.header('Access-Control-Allow-Origin', '*');

        res.header("Access-Control-Allow-Headers","Origin, Accept, X-Requested-With, X-HTTP-Method-Override, Content-Type, Authorization");
       */
        console.log(req.originalUrl,'cors')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header("Access-Control-Allow-Origin" , 'http://anuragsharma.com:9000')
        res.header("Access-Control-Allow-Credentials" , true );
        next();
    }
    app.use(allowCrossDomain);
    app.use(session({
        secret: '3546xcsdcsd25333',
        // resave: true,
        // saveUninitialized: true,
        // cookie: {
        //     path     : '/',
        //     domain   : 'anuragsharma.com:9000',
        //     httpOnly : true,
        //     maxAge   : 1000*60*60*24*30*12    //one year(ish)
        // }
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    googlePassport.googlePassport();


    app.get('/login/google',
        passport.authenticate('google',{scope:['profile','email']})
    );
    app.get('/auth/google',
        passport.authenticate('google', {
            successRedirect : 'http://anuragsharma.com:9000/dashboard',
            failureRedirect : 'http://anuragsharma.com:9000/'
        }));

    PostsRoute(app);
    commentRoute(app);
    complaintRoute(app);
    //app.post('/api/posts',checkLoginMiddleware.isLoggedIn,postController.createPost);

    app.get('/api/user' ,
        checkLoginMiddleware.isLoggedIn,
        userController.getUser
    )
    app.get('/user/logout',(req,res) => {
        if(req.isAuthenticated()){
            console.log('logged in user')
            //req.logOut();
            //res.redirect('http://anuragsharma.com:9000/');
            req.session.destroy(function(e){
                req.logout();
                res.redirect('http://anuragsharma.com:9000/');
            });
        }else{
            res.redirect('http://anuragsharma.com:9000/');
        }
       /* req.session.destroy(function() {
            res.clearCookie('userId');
            res.redirect('http://anuragsharma.com:9000/');
        });*/
    })


}