/**
 * Created by anurag on 6/4/17.
 */
const User = require('./user.model.js');

exports.createUser = (profile,done) => {
    if(profile._json.domain === 'tothenew.com'){
        let user = {
            displayName: profile.displayName,
            email: profile.emails[0].value,
            imagUrl: profile.photos[0].value,
        }
        User.find({}).exec( (err,collection) => {
            if(collection.length==0){
                User.create(user,(err,data)=>{
                    if(data){
                        User.findOne({'email':user.email},(err, data) => {
                            return done(null,data);
                        })
                    }
                });
            }else{
                User.findOne({'email': profile.emails[0].value}, (err,data) => {
                    if(err){
                        return done(err);
                    }else{
                        if(data){
                            return done(null,data);
                        }else{
                            User.create(user,(err, data) => {
                                console.log('-----inside----',data);
                                if(data){
                                    return done(null,data);
                                }
                            });
                        }

                    }
                })
            }
        })
    }else{
        return done(null,null);
    }
}
exports.sendUser = (user,res) => {
    console.log(user,'----inservice')
    res.json(user);
}