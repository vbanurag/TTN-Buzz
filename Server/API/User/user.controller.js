/**
 * Created by anurag on 6/4/17.
 */
const userService = require('./user.service');

exports.createUser =(profile,done)=>{
    userService.createUser(profile,done);
}
exports.getUser = (req,res,next) => {
    userService.sendUser(req.user,res);
}
