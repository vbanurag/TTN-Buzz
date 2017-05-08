/**
 * Created by anurag on 5/5/17.
 */
let Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/TTNBuzz');

(()=>{
    Mongoose.connection.on('open',(err,data)=>{
        console.log('successfully connected Mongoose');
    });
    Mongoose.connection.on('error',(err,data)=>{
        console.log('Error in connection ',err);
    })
})();