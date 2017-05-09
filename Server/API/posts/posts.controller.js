/**
 * Created by anurag on 8/5/17.
 */
const postService = require('./posts.service');
const uploadImage = require('./../../uploader/cdn.image.upload');


exports.createPost =(req,res,next)=>{
    let url =''
    console.log('user------',req.user)
    uploadImage.uploadImage(req.body.image, (url) => {
        let buzzData = {
            user: {
                id:req.user._id,
                name:req.user.displayName,
                imageUrl: req.user.imagUrl
            },
            imageUrl:url,
            content: req.body.status
        }
        console.log('url is ',url,'------',req.body.status)
        postService.createPost(buzzData,res);
    });
}
exports.getPosts = (req,res,next) => {
    postService.getPosts(res);
}