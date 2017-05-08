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

            Object.keys(collections).forEach(function(k) {
                console.log(k,profile.id)
            });
            if(profile._json.domain === 'tothenew.com'){
                User.find({}).exec( (err,collection) => {
                    if(collection.length==0){
                        User.create(JSON.parse(JSON.stringify(profile)))
                        return done(null,profile);
                    }else{

                        User.find({'emails.value': profile.emails[0].value}, (err,data) => {
                            if(err){
                                return done(err);
                            }else{
                                if(data){
                                    return done(null,data);
                                }else{
                                    User.create(JSON.parse(JSON.stringify(profile)))
                                    return done(null,profile);
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
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null,user);
    })
}
