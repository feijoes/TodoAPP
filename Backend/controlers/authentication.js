
const passport = require('passport');
const passwordUtils = require('../security/passport');
const connection = require('../db/coneccion');
const User = connection.models.User;
const LogOut = require('express-passport-logout');


const login = passport.authenticate("local", {
    failureRedirect: "/login-failure",
    successRedirect: "/login-success"
  });

const register = (req, res)=>{
    const saltHash = passwordUtils.genPassword(req.body.password);
    
    const {salt, hash} = saltHash
    // very unsafe admin creation
    const user = req.body.admin? {
        usename: req.body.usename,
        hash:hash,
        salt: salt,
        admin: true
    }:{
        usename: req.body.usename,
        hash:hash,
        salt: salt,
        admin: false
    }
    const newUser = new User(user)
    newUser.save()
    res.redirect('/login')
 }
const logout = (req, res, next) => {
    LogOut()
    res.back();
}



module.exports ={
    login,
    logout,
    register
}