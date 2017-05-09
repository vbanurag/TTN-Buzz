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
            Post.find((err,allPost) => {
                if(err){
                    res.send(err)
                }else{
                    res.send(allPost);
                }
            })
        }
    })
}
exports.getPosts = (res) => {
    Post.find((err,allPost) => {
        if(err){
            res.send(err);
        }else{
            res.send(allPost);
        }
    })
}