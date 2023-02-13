const express = require('express')
const bcrypt = require('bcrypt')
const createError = require('http-errors')
const jwt = require('jsonwebtoken')

const {User} = require('../models/People')


const getLogin = (req, res) => {
    res.render('index')
}

const login = async (req,res,next) => {
    try{
        const user = await User.findOne({
            $or:[{email:req.body.username}, {mobile: req.body.username}]
        })
        if(user && user._id){
            const isValidPassword = await bcrypt.compare(req.body.password, user.password)
            
            if(isValidPassword){
                //generate jwt
                const userObject = {
                    username : user.name,
                    mobile : user.mobile,
                    email : user.email,
                    role : "user"
                }

                const token = jwt.sign(userObject, process.env.JWT_SECRET,{
                    esxpiresIn: process.env.JWT_EXPIRY
                })

                res.cookie(process.env.COOKIE_NAME, token, {
                    maxAge: process.env.JWT_EXPIRY,
                    httpOnly : true,
                    signed : true
                })
                res.locals.loggedInUser = userObject

                res.render('inbox')
            }else{
                //err
                throw createError("Login Failed ! ")
            }
        }else{
            throw createError("Login Failed ! ")
        }
    }catch(err){
        res.render('index',{
            errors:{
                common:{
                    msg:err.message
                }
            }
        })
    }
}


module.exports = {getLogin, login}