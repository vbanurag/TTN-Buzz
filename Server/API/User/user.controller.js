/**
 * Created by anurag on 6/4/17.
 */
const userService = require('./user.service');

exports.createUser =(req,res,next)=>{
    let userData = req.body.data;
    console.log('user data ',userData);
    userService.createUser(userData,res);
}
exports.getUser = (req,res,next) => {
    userService.sendUser(req.user,res);
}
