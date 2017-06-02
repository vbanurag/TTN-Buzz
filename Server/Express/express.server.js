/**
 * Created by anurag on 5/5/17.
 */
require('./../API/Mongoose/db.connection');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const helmet = require('helmet');
const csp = require('helmet-csp');

app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(csp({
    directives: {
        defaultSrc: ["'self'", 'anuragsharma.com:9000'],
        styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com'],
    }
}));
const Route = require('./../Routes/route');


Route(app);

app.listen((process.env.PORT || 4500 ),()=>{
    console.log('server is running at anuragsharma.com:4500')
});
app.get('/*',(req,res) => {
    res.redirect('http://localhost:9000/')
});
