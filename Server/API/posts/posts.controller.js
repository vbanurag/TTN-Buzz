/**
 * Created by anurag on 8/5/17.
 */
const postService = require('./posts.service');
const uploadImage = require('./../../uploader/cdn.image.upload');

exports.createPost =(req,res,next)=>{
    let url =''
    console.log('user------',req.user)
    uploadImage.uploadImage(req.body.image, (url) => {
        console.log('url is ',url,'------',req.body.status)
    });

}