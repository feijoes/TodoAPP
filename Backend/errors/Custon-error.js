

class ApiError extends Error{
    constructor( message, statusCode ) {
        super(message);
        this.statusCode = statusCode
    }
}

const CreateError = ( msg, statusCode )=>{
    return new ApiError(msg, statusCode)
}

module.exports = {
    ApiError,
    CreateError
}