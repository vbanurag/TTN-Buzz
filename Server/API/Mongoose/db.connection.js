/**
 * Created by anurag on 5/5/17.
 */
const Mongoose = require('mongoose');
const MongoURI = require('./../../Config/cloud.upload.constants');

Mongoose.connect(MongoURI.mongoDbURL);

(()=>{
    Mongoose.connection.on('open',(err,data)=>{
        console.log('successfully connected Mongoose');
    });
    Mongoose.connection.on('error',(err,data)=>{
        console.log('Error in connection ',err);
    })
})();