/**
 * Created by anurag on 2/5/17.
 */
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const configGoogle = require('./../Constants/google.config');
const passport = require('passport');
const UserController = require('./../../Server/API/User/user.controller');
const User = require('./../API/User/user.model');
const mongoose = require('mongoose');
const createUser = require('./../API/User/user.controller');
const collections = mongoose.connections[0].collections;

module.exports.googlePassport = ()=>{
    console.log('call')
    passport.use(new googleStrategy(
        {
            clientID:configGoogle.google.ClientID,
            clientSecret: configGoogle.google.Clientsecret,
            callbackURL: configGoogle.google.callbackURL
        },
        (token,refreshToken,profile,done)=> {
            createUser.createUser(profile,done);
        }
    ))
    passport.serializeUser(function(user, done) {
        console.log(user,'serialize')
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        console.log('deserialize----',id)
        User.findOne({_id:id},(err,data)=> {
            if(err){
                done(err)
            }else{
                done(null,data);
            }
        })
    })
}
