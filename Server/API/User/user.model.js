const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
},{strict: false})

module.exports= Mongoose.model('User',userSchema);