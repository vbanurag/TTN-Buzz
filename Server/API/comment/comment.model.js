/**
 * Created by anurag on 16/5/17.
 */
const Mongoose = require('mongoose');

const CommentSchema = new Mongoose.Schema({
    comment:{
        type:String
    },
    commentedBy:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    commentedOn:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }

},{ versionKey: false, timestamps: true });

CommentSchema.set('autoIndex', false);
CommentSchema.index({comment: 'text'});

module.exports = Mongoose.model('Comment', CommentSchema);