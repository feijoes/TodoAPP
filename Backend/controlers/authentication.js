
const passport = require('passport');
const passwordUtils = require('../lib/passwordUtils');
const {User} = require('../db/coneccion');
const LogOut = require('express-passport-logout');
require('../security/passport')

const passportlogin = passport.authenticate("local", {
    badRequestMessage: 'Your message you want to change.',
  });

const login = (req,res)=> res.send(req.session)

const register = (req, res)=>{
    const saltHash = passwordUtils.genPassword(req.body.password);
    
    const {salt, hash} = saltHash
    // very unsafe admin creation
    const user = req.body.admin? {
        username: req.body.username,
        hash:hash,
        salt: salt,
        admin: true
    }:{
        username: req.body.username,
        hash:hash,
        salt: salt,
        admin: false
    }
    
    const newUser = new User(user)
    newUser.save()
    res.redirect('http://localhost:3000/')
 }
const logout = (req, res, next) => {
    LogOut()
    res.back();
}



module.exports ={
    passportlogin,
    login,
    logout,
    register
}