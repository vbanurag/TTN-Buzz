/**
 * Created by anurag on 8/5/17.
 */
const cloud = require('cloudinary');
const cloudCred = require('./../Config/cloud.upload.constants');

cloud.config({
    cloud_name: cloudCred.cloudinary.cloud_name,
    api_key: cloudCred.cloudinary.api_key,
    api_secret: cloudCred.cloudinary.api_secret
})



module.exports.uploadImage = (data,value) => {
    cloud.uploader.upload(data, function(result) {
        console.log(result.url);
        value(result.url);
    });
}