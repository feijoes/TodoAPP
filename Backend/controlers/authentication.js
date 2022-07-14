
const passport = require('passport');
const passwordUtils = require('../lib/passwordUtils');
const {User,Color} = require('../db/coneccion');
const LogOut = require('express-passport-logout');
require('../security/passport')

const passportlogin = passport.authenticate("local", {
    badRequestMessage: 'Your message you want to change.',
  });

const login = (req,res)=> {
    res.send(req.session)
}

const createcolors = (username)=>{
    const colors = [{
        color:"red",
        desc: "Important"
    },{
       color: "green",
       desc: "completed" 
    },
    {
        color: "yellow",
        desc: "warning"
    },{
        color:"orange",
        desc:"goals"
    }]

    for (let index in colors){
        const dictColor = colors[index]
        dictColor.user = username
        const Defaultcolor = new Color(dictColor)
        Defaultcolor.save()
    }
}
const register = (req, res)=>{
    const saltHash = passwordUtils.genPassword(req.body.password);
    
    const {salt, hash} = saltHash

    const user = {
        username: req.body.username,
        hash:hash,
        salt: salt,
        admin: true
    }
    
    const newUser = new User(user)
    newUser.save()
    createcolors(req.body.username)
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