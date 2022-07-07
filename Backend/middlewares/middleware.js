

NotFound = (req, res) => req.status(404).json({ msg: "Route does not exist" })

AsyncWrapper = (func) => {
    return async (req, res, next)=>{ 
        try {
            await func(req, res, next)

        } catch (error) {
            next(error)
        }
}}


module.exports = {
    AsyncWrapper,
    NotFound
}