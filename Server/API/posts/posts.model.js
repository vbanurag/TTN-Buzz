/**
 * Created by anurag on 8/5/17.
 */
const Mongoose = require('mongoose');

const PostSchema = new Mongoose.Schema({
    category : {
        type : String,
        default : 'BUZZ'
    },
    postedBy: { type:Mongoose.Schema.Types.ObjectId,ref:'User' },
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

PostSchema.set({autoIndex: false});
PostSchema.index({postedBy: 1, sparse: true});
PostSchema.index({})

module.exports = Mongoose.model('Post', PostSchema);