const { ApiError } = require('../errors/Custon-error')
require('dotenv').config()
NotFound = (req, res) => res.status(404).json({ msg: "Route does not exist" })

AsyncWrapper = (func) => {
    return async (req, res, next)=>{ 
        try {
            await func(req, res, next)

        } catch (error) {
            next(error)
        }
}}
const ErrorHandlerMiddleware = (err, req, res, next) =>{
    if (err instanceof ApiError){
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: err.message })

    return res.status(500).json({ msg: "Something went wrong, try again later.." })
}

module.exports = {
    ErrorHandlerMiddleware,
    AsyncWrapper,
    NotFound
}

