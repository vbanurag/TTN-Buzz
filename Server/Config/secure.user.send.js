/**
 * Created by anurag on 24/5/17.
 */
const CryptoJS = require("crypto-js");
const SECRET_KEY = require('./../Constants/secretKey.encrypt');

module.exports.encryptData = (data) => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY.SecretKey);
    return encryptedData;
};
