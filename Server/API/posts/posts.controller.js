/**
 * Created by anurag on 8/5/17.
 */
const postService = require('./posts.service');
const uploadImage = require('./../../uploader/cdn.image.upload');


exports.createPost =(req,res,next)=>{
    let url =''
    console.log('user------',req.body)
    uploadImage.uploadImage(req.body.image, (url) => {
        let buzzData = {
            postedBy: req.user._id,
            imageUrl:url,
            content: req.body.status,
            category: req.body.category
        }
        console.log('url is ',url,'------',req.body.status)
        postService.createPost(buzzData,res);
    });
}
exports.getPosts = (req,res,next) => {
    postService.getPosts(res);
}