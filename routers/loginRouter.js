const express = require('express')
const router = express.Router()

const {decorateHtmlresponse} = require('../middlewares/common/decorateHtmlResponse')
console.log(decorateHtmlresponse)
const { doLoginValidators, doLoginValidationHandler} = require('../middlewares/login/loginValidators')
const {getLogin, login, logout} = require('../controllers/loginController')

const {redirectLoggedIn} = require('../middlewares/common/checkLogin')

router.get('/', decorateHtmlresponse('Login'), redirectLoggedIn, getLogin)

router.post('/', doLoginValidators, doLoginValidationHandler, decorateHtmlresponse('login'), login)

router.delete('/', logout)

module.exports = router