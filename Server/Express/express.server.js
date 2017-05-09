/**
 * Created by anurag on 5/5/17.
 */
require('./../API/Mongoose/db.connection');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
const Route = require('./../Routes/route');


Route(app);

app.listen(4500,()=>{
    console.log('server is running at anuragsharma.com:4500')
})
