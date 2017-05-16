/**
 * Created by anurag on 8/5/17.
 */
const postService = require('./posts.service');
const uploadImage = require('./../../uploader/cdn.image.upload');


exports.createPost =(req,res,next)=>{
    let url ='';
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
exports.updateLikeDislike = (req,res,next) => {
    console.log('in api call ---',req.body);
    const opinion = req.body.opinion;
    let opinionPass= {};
    if(opinion.choose=='LIKE'){
        opinionPass = {
            choose: 'LIKE',
            id: opinion.id,
            user: opinion.user
        }
    }else if(opinion.choose=='DISLIKE'){
        opinionPass = {
            choose: 'DISLIKE',
            id: opinion.id,
            user: opinion.user
        }
    }
    postService.updateLikeDislike(opinionPass,res);
}
