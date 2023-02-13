const express = require('express')
const router = express.Router()

const {decorateHtmlresponse} = require('../middlewares/common/decorateHtmlResponse')
const {doLoginValidator, doLoginValidatorHandler} = require('../middlewares/login/loginValidators')
const {getLogin} = require('../controllers/loginController')

router.get('/', decorateHtmlresponse('Login') ,getLogin)

router.post('/', doLoginValidator, doLoginValidatorHandler, decorateHtmlresponse('login'), login)

module.exports = router