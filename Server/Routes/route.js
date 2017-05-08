/**
 * Created by anurag on 5/5/17.
 */
const userController = require('./../API/User/user.controller');
const passport = require('passport');
const googlePassport = require('./../Passport/google.auth');
const session = require('express-session');
const cors = require('cors');
module.exports= (app)=>{
    const allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        //res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    }
    //app.use(allowCrossDomain);
    //app.use(cors())
    app.use(session({ secret: 'fawfef534634sdfsfsdf' }));
    app.use(passport.initialize());
    app.use(passport.session());

    googlePassport.googlePassport();
   // app.post('/user',userController.createUser);


    app.get('/login/google',allowCrossDomain,
        (req,res,next)=>{console.log('---in passport ',req.url);next()},
        passport.authenticate('google',{scope:['profile','email']})
    );
    app.get('/auth/google',allowCrossDomain,
        passport.authenticate('google', {
            successRedirect : 'http://anuragsharma.com:9000/dashboard',
            failureRedirect : '/login'
        }));


}