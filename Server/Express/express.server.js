/**
 * Created by anurag on 5/5/17.
 */
require('./../API/Mongoose/db.connection');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const Route = require('./../Routes/route');
Route(app);

app.listen(4500,()=>{
    console.log('server is running at anuragsharma.com:4500')
})
app.use('/*',(req,res) => {
    res.redirect('http://localhost:9000/');
})