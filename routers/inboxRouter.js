const express = require('express')
const router = express.Router()

const {decorateHtmlresponse} = require('../middlewares/common/decorateHtmlResponse')
const {getInbox} = require('../controllers/inboxController')

const {checkLogin} = require('../middlewares/common/checkLogin')

router.get('/', decorateHtmlresponse('Inbox'), checkLogin, getInbox)

module.exports = router