const express = require('express')
const router = express.Router()

const {decorateHtmlresponse} = require('../middlewares/common/decorateHtmlResponse')
const { doLoginValidators, doLoginValidationHandler} = require('../middlewares/login/loginValidators')
const {getLogin, login} = require('../controllers/loginController')

router.get('/', decorateHtmlresponse('Login') ,getLogin)

router.post('/', doLoginValidators, doLoginValidationHandler, decorateHtmlresponse('login'), login)

module.exports = router