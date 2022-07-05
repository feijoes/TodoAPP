
const express = require("express");
const app = express();
const tasks = require("./routers/tasks")
const authenticate = require('./routers/authentication_router')
const cors = require("cors")
const session = require('express-session');
const passport = require('passport');
const connection = require('./db/coneccion');
const MongoStore = require('connect-mongodb-session')(session);
const sessionStore = new MongoStore({mongooseConnection: connection, collection: 'session'})
const back = require('express-back');
require('dotenv').config()

app.use(cors({origin: 'http://localhost:3000'}))
app.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie:{
        maxAge: 1000 * 60 * 60 *24
    }
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(passport.initialize());
app.use(passport.session());

app.use(back());
app.use("/api/v1/todo",tasks)
// Login Logout and Register
app.use("/api/v1/",authenticate)


app.listen(5000)