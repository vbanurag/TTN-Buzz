const Mongoose = require('mongoose');
const role = ['admin','User']
const userSchema = new Mongoose.Schema({
    displayName: {
        type: String
    },
    email: {
        type: String
    },
    imageUrl: {
        type: String
    },
    role: {
        type: String, enum: ['admin', 'User'],
        default: 'User'
    }
},{strict: false,versionKey: false, timestamps: true})

module.exports= Mongoose.model('User',userSchema);