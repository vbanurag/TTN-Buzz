/**
 * Created by anurag on 8/5/17.
 */
const Mongoose = require('mongoose');

const PostSchema = new Mongoose.Schema({
    category : {
        type : String,
        default : 'BUZZ'
    },
    user : {
        id : String,
        name : String,
        imageUrl : String
    },
    imageUrl : String,
    videoUrl : String,
    content : String,
    count : {
        likes : {
            type : Number,
            default: 0},
        dislikes : {
            type : Number,
            default: 0},
    },
    opinion : [{
        userId : String,
        name : String,
        imageUrl : String,
        category : String
    }],
    commentCount : {
        type : Number,
        default : 0
    }
},{ versionKey: false, timestamps: true});

module.exports = Mongoose.model('Post', PostSchema);