const express = require('express')
const router = express.Router()

const {decorateHtmlresponse} = require('../middlewares/common/decorateHtmlResponse')
const { doLoginValidators, doLoginValidationHandler} = require('../middlewares/login/loginValidators')
const {getLogin, login, logout} = require('../controllers/loginController')

router.get('/', decorateHtmlresponse('Login') ,getLogin)

router.post('/', doLoginValidators, doLoginValidationHandler, decorateHtmlresponse('login'), login)

router.delete('/', logout)

module.exports = router