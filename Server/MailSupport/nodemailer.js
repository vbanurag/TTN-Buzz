/**
 * Created by anurag on 25/5/17.
 */

const nodemailer = require('nodemailer');


function sendMail(req, res) {
    var user = req.params.user;
    if(user) {
        console.log("Sending mail to " + user);
        res.send("Sending mail to " + user);
        send(user);
    } else {
        console.log("Invalid user address");
        res.send("Invalid user address " + user);
    }
}


