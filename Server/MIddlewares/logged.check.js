/**
 * Created by anurag on 8/5/17.
 */
module.exports.isLoggedIn = (req,res,next) => {
    if(req.isAuthenticated()){
        next();
    }else{
        res.sendStatus(501);
    }
};