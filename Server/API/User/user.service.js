/**
 * Created by anurag on 6/4/17.
 */
const User = require('./user.model.js');

exports.createUser=(userData,res)=>{

    User.create({id:"1",userName:"tyagi"},function (err,data) {
        console.log("======",err,data)
    });
}
exports.sendUser = (user,res) => {
    console.log(user,'----inservice')
    res.json(user);
}