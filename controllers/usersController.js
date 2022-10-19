const express = require('express')

const getUsers = (req, res) => {
    res.render('users')
}


module.exports = {getUsers}