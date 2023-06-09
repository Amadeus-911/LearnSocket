const decorateHtmlresponse = (page_title) => {
    return (req, res, next) => {
        res.locals.html = true
        res.locals.title = page_title
        res.locals.loggedInUser = {}
        res.locals.data = {}
        res.locals.errors = {}
        next()
    }
}

module.exports = {decorateHtmlresponse}