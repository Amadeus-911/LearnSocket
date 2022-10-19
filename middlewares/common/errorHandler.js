const createError = require('http-errors')
//404

const notFound = (req, res, next) => {
    next(createError(404, "Page Not Found"))
}

const errorHandler = (err, req, res, next) => {

    if(!res.locals.html){
        res.render('./errors/error', {
            title:  "Error Page",
            error: err,
            status : err.status
        })
    }else{
        res.json({
            message: err.message,
            status: err.status
        })
    }


}

module.exports = {notFound, errorHandler}