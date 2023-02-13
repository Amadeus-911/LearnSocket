const express = require('express')
const router = express.Router()

const {check} = require('express-validator')

const {decorateHtmlresponse} = require('../middlewares/common/decorateHtmlResponse')
const { getUsers,addUser,removeUser} = require("../controllers/usersController")
const avatarUoload = require('../middlewares/users/avatarUpload')
const {addUserValidators} = require('../middlewares/users/userValidator')
const  {addUserValidationHandler} = require('../middlewares/users/userValidator')

router.get('/', decorateHtmlresponse('Users'),getUsers)

router.post('/', avatarUoload, addUserValidators, addUserValidationHandler, addUser)

router.delete("/:id", removeUser)


module.exports = router