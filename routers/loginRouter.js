const express = require('express')
const router = express.Router()

const {decorateHtmlresponse} = require('../middlewares/common/decorateHtmlResponse')

const {getLogin} = require('../controllers/loginController')

router.get('/', decorateHtmlresponse('Login') ,getLogin)

router.post('/', login)

module.exports = router