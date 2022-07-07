const express = require("express");
const router = express.Router();
const {
    passportlogin,
    login,
    register,
    logout
} = require("../controlers/authentication")

router.route("/login").post(passportlogin,login)
router.route("/register").post(register)
router.route('/logout').get(logout)
module.exports = router