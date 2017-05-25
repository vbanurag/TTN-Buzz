/**
 * Created by anurag on 25/5/17.
 */
const nodemailer = require('nodemailer');
const mailConfig = require('./mail.config');

const send = (to,mailBody) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: mailConfig.mailAuth.user,
            pass: mailConfig.mailAuth.pass
        }
    });

    const mailOptions = {
        from:  `Admin Noida TTN BUZZ <${mailConfig.mailAuth.user}>`,
        to: to,
        subject: mailConfig.ComplaintResolvedOption.subject,
        text: mailBody,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
};

module.exports = send;