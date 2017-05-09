/**
 * Created by anurag on 2/5/17.
 */
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const configGoogle = require('./../Constants/google.config');
const passport = require('passport');
const UserController = require('./../../Server/API/User/user.controller');
const User = require('./../API/User/user.model');
const mongoose = require('mongoose');
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

            if(profile._json.domain === 'tothenew.com'){
                let user = {
                    displayName: profile.displayName,
                    email: profile.emails[0].value,
                    imagUrl: profile.photos[0].value,
                }
                User.find({}).exec( (err,collection) => {
                    if(collection.length==0){
                        User.create(user)
                        return done(null,profile);
                    }else{

                        User.findOne({'email': profile.emails[0].value}, (err,data) => {
                            if(err){
                                return done(err);
                            }else{
                                if(data){
                                    return done(null,data);
                                }else{
                                    User.create(user,(err, data) => {
                                        console.log(data)
                                    })
                                    User.findOne({'email':user.email},(err, data) => {
                                        return done(null,data);
                                    })
                                }

                            }
                        })
                    }
                })
            }else{
                return done(null,null);
            }

        }
    ))
    passport.serializeUser(function(user, done) {
        console.log(user,'serialize')
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findOne({_id:id},(err,data)=> {
            if(err){
                done(err)
            }else{
                done(null,data);
            }
        })
    })
}
