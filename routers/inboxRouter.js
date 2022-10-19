const express = require('express')
const router = express.Router()

const {decorateHtmlresponse} = require('../middlewares/common/decorateHtmlResponse')
const {getInbox} = require('../controllers/inboxController')

router.get('/', decorateHtmlresponse('Inbox'),getInbox)

module.exports = router