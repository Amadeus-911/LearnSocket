const express = require('express')

const getInbox = (req, res) => {
    res.render('inbox')
}


module.exports = {getInbox}