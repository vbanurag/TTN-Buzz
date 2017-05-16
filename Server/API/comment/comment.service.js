/**
 * Created by anurag on 16/5/17.
 */
const Comment = require('./comment.model');

exports.addComment = (data,res) => {
    console.log('in service ....', data)
    Comment.create(data,(err,data)=> {
        if(err){
            console.log(err)
        }else{
            console.log(data,'in comment')
        }
    })
}
exports.getComments = (res) => {
    Comment.find({}).sort({createdAt: -1})
        .populate('commentedBy','commentedOn')
        .exec((err,data)=>{
            if(err){
                res.send(err);
            }else{
                res.send(data);
            }
        })
}
