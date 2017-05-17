/**
 * Created by anurag on 8/5/17.
 */
const Mongoose = require('mongoose');

const PostSchema = new Mongoose.Schema({
    category : {
        type : String,
        default : 'BUZZ'
    },
    postedBy: {
        type:Mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    imageUrl : String,
    videoUrl : String,
    content : String,
    likeBy : {
        likes : [{
            type:Mongoose.Schema.Types.ObjectId,
            ref:'User'}],
    },
    dislikeBy : {
        dislikes : [{
            type:Mongoose.Schema.Types.ObjectId,
            ref:'User'}],
    },
    comments: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
},{ versionKey: false, timestamps: true});

PostSchema.set({autoIndex: false});
PostSchema.index({postedBy: 1, sparse: true});
PostSchema.index({content: 'text' });

module.exports = Mongoose.model('Post', PostSchema);