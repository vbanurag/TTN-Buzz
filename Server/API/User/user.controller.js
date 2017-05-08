/**
 * Created by anurag on 6/4/17.
 */
const userService = require('./user.service');

exports.createUser =(req,res,next)=>{
    let userData = req.body.data;
    console.log('user data ',userData);
    userService.createUser(userData,res);
}
/*exports.getUser = (req,res,next)=>{
        console.log(req.query.name);
        userService.findUser(req.query.name,res);
}

exports.updateUser=(req,res,next)=>{
    console.log('id: ',req.query.id,' data is : ',req.body.data);
    userService.updateUser(req.query.id,req.body.data,res);

}
exports.deleteUser = (req,res,next)=>{
    //console.log('id: ',req.params,' data is : ',req.body.data);
    userService.deleteUser(req.params.id,res);
}
exports.findAllUser=(req,res,next)=> {
    userService.findAllUser(res);
}
exports.findByQuery=(req,res,next)=>{
    console.log('params name : ',req.params.name)
    userService.findByQuery(req.params.name,res);
}*/
