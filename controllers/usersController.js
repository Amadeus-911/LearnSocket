const express = require('express')
const bcrypt = require('bcrypt')

const getUsers = (req, res) => {
    res.render('users')
}

const addUser = async (req, res) =>{
    let newUser
    let hashedPassword = await bcrypt.hash(req.body.password, 10)

    if(req.files && req.files.length > 0){
        newUser = new User({
            ...req.body,
            avatar: req.files[0].filename,
            password: hashedPassword
        })
    }

    try{
        const result = await newUser.save()
        res.status(200).json({
            message: "User was added successfully!"
        })
    }
    catch(err){
        res.status(500).json({
            errors:{
                common:{
                    msg:"Unknown Error Occured!"
                }
            }
        })
    }
}

module.exports = {getUsers, addUser}