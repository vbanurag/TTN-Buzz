/**
 * Created by anurag on 8/5/17.
 */
const Post = require('./posts.model.js');

exports.createPost=(post,res)=>{
    console.log(post,'----data of post')
    Post.create(post,(err,data)=> {
        if(err){
            res.send(err)
        }else{
            fetchAllPost(res);
        }
    })
}
exports.getPosts = (res) => {
   fetchAllPost(res);
}
exports.updateLikeDislike = (opinion,res) => {
    if(opinion.choose=='LIKE'){
        Post.find({'dislikeBy.dislikes':{'$in': [opinion.user._id]}}, (err,data) => {
            if(data.length==0){
                Post.updateOne({_id: opinion.id},{'$addToSet': {'likeBy.likes': opinion.user._id}},(err,updateData) => {
                    if(err){
                        res.send(err);
                    }else{
                        updatedPost(opinion.id,res);
                        //res.send(updateData);
                    }
                })
            } else if (data.length >=1){
                Post.updateOne({_id: opinion.id},{'$pull' : {'dislikeBy.dislikes': opinion.user._id}},(err,data) => {
                    if(err){
                        res.send(err);
                    }else{
                        Post.updateOne({_id: opinion.id},{'$addToSet': {'likeBy.likes': opinion.user._id}},(err,updateData) => {
                            if(err){
                                res.send(err);
                            }else{
                                updatedPost(opinion.id,res);
                                //res.send(updateData);
                            }
                        })
                    }
                })
            }
        })
    }else if(opinion.choose == 'DISLIKE'){
        Post.find({'likeBy.likes':{'$in': [opinion.user._id]}}, (err,data) => {
            if(data.length==0){
                console.log('data--in dilike---',data);
                Post.update({_id: opinion.id},{'$addToSet': {'dislikeBy.dislikes': opinion.user._id}},(err,updateData) => {
                    if(err){
                        res.send(err);
                    }else{
                        updatedPost(opinion.id,res);
                        //res.send(updateData);
                    }
                })
            } else if (data.length >= 1){
                Post.update({_id: opinion.id},{'$pull' : {'likeBy.likes': opinion.user._id}},(err,data) => {
                    if(err){
                        res.send(err);
                    }else{
                        Post.update({_id: opinion.id},{'$addToSet': {'dislikeBy.dislikes': opinion.user._id}},(err,updateData) => {
                            if(err){
                                res.send(err);
                            }else{
                                updatedPost(opinion.id,res);
                                //res.send(updateData);
                            }
                        })
                    }
                })
            }
        })
    }

}

const updatedPost = (id,res) => {
    console.log('extra method called ----',id)
    Post.find({_id:id}).populate('postedBy')
        .populate('likeBy.likes')
        .populate('dislikeBy.dislikes')
        .populate({
            path:'comments',
            populate:{
                path: 'commentedBy',
            }
        })
        .exec( (err,post )=> {
            if(err){
                res.send(err);
            }else{
                console.log('-------post-----',post);
                res.send(post);
            }
        })
}
exports.getUpdatedPost = updatedPost;

const fetchAllPost = (res) => {
    Post.find({})
        .sort({createdAt: -1})
        .populate('postedBy')
        .populate('likeBy.likes')
        .populate('dislikeBy.dislikes')
        .populate({
            path:'comments',
            populate:{
                path: 'commentedBy',
            }
        })
        /*.populate({
            path: 'comments.commentedBy',
            model: 'Comment'
        })*/
        .exec((err,allPost)=> {
        if(err){
            res.send(err);
        }else{
            res.send(allPost);
        }
    })
}