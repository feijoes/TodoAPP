
const passport = require('passport');
const passwordUtils = require('../lib/passwordUtils');
const {User} = require('../db/coneccion');
const LogOut = require('express-passport-logout');
require('../security/passport')

const login = passport.authenticate("local", {
    failureRedirect: "/login-failure",
    successRedirect: "/login-success"
  },(err, user, options) => {
    console.log(options) // options will be the complete object you pass in done()
});

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
    res.redirect('http://localhost:3000/login')
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