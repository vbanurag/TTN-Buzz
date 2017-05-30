/**
 * Created by anurag on 8/5/17.
 */
const postService = require('./posts.service');
const uploadImage = require('./../../uploader/cdn.image.upload');
const validate = require('validator');
const postValidate = require('./post.validate');


exports.createPost =(req,res,next)=>{
    let url ='';
    return new Promise((resolve,reject) => {
        if(req.body.image != '' || req.body.image == '' ){
            if(!validate.isEmpty(req.body.status) && !validate.isEmpty(req.body.category)){
                resolve (req.body,req.user);
            }else{
                reject('Empty body');
            }
        }else{
            reject('Empty body');
        }
    }).then((body,user) => {
        uploadImage.uploadImage(req.body.image, (url) => {
            let buzzData = {
                postedBy: req.user._id,
                imageUrl:url,
                content: req.body.status,
                category: req.body.category
            };
            postService.createPost(buzzData,res);
        });
    })
        .catch((err) => {
            res.status(500);
        })
};
exports.getPosts = (req,res,next) => {
    postService.getPosts(res);
};
exports.updateLikeDislike = (req,res,next) => {
    if(postValidate.updateLikeDislikeValidate(req)){
        const opinion = req.body.opinion;
        let opinionPass= {};
        if(opinion.choose=='LIKE'){
            opinionPass = {
                choose: 'LIKE',
                id: opinion.id,
                user: opinion.user
            };
        }else if(opinion.choose=='DISLIKE'){
            opinionPass = {
                choose: 'DISLIKE',
                id: opinion.id,
                user: opinion.user
            };
        }
        postService.updateLikeDislike(opinionPass,res);
    }else{
        res.send({'msg' : 'Invalid data'});
    }

};
