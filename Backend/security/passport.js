
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
const Strategy = new LocalStrategy({ // or whatever you want to use
    usernameField: 'username',    // define the parameter in req.body that passport can use as username and password
    passwordField: 'password'
  },VerifiyCallback);

passport.use(Strategy);

passport.serializeUser((user,done)=>{
    console.log(user)
    done(null,user.id)
})

passport.deserializeUser(( userId, done )=>{
    User.findById(userId
        ).then((user)=>{
            
            done(null,user)
            
        }).catch((err) => done(err))
})
