const express = require('express')
const router = express.Router()

const {decorateHtmlresponse} = require('../middlewares/common/decorateHtmlResponse')
const {getUsers} = require('../controllers/usersController')

router.get('/', decorateHtmlresponse('Users'),getUsers)

module.exports = router