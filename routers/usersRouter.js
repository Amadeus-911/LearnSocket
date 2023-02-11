const express = require('express')
const router = express.Router()
const {check} = require('express-validator')

const {decorateHtmlresponse} = require('../middlewares/common/decorateHtmlResponse')
const {getUsers} = require('../controllers/usersController')
const avatarUoload = require('../middlewares/users/avatarUpload')

router.get('/', decorateHtmlresponse('Users'),getUsers)

router.post('/', avatarUoload, [
        check('name').isLength({min: 1}).withMessage('Name is required'),
        check('email').isEmail().withMessage('Email is required'),
    ]);


module.exports = router