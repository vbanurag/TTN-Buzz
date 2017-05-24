/**
 * Created by anurag on 24/5/17.
 */
import CryptoJS from 'crypto-js';
import {
    SECRET_KEY
} from './../Constants/decrypt.secretKey';

export const decrypter = (data) => {
    const bytes  = CryptoJS.AES.decrypt(data, SECRET_KEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
};
