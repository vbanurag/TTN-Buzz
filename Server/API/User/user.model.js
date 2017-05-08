let Mongoose = require('mongoose');
const userModel = require("./../User/user.model");

const userSchema = new Mongoose.Schema({
},{strict: false})

module.exports= Mongoose.model('User',userSchema);