
const passport = require('passport');
const { validPassword } = require('../lib/passwordUtils');
const LocalStrategy = require('passport-local').Strategy;
const {User} = require('../db/coneccion');

const VerifiyCallback =  ( username, password, done )=>{
 
    User.findOne({ username:username },(err,user)=>{
        if (err) { return done(err); }
        if (!user) { return done(null, false ) }
        if (!validPassword(password, user.hash, user.salt))  { return done(null, false); }
        return done(null, user)
    })
   
}
const Strategy = new LocalStrategy(VerifiyCallback);

passport.use(Strategy);

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(( userId, done )=>{
    User.findById(userId
        ).then((user)=>{
            
            done(null,user)
            
        }).catch((err) => done(err))
})
