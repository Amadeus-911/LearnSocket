const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config()

const conn = require('./serverDB')
conn()



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs') // Setting EJS as template engine
app.set('views', __dirname + '/views') // Setting the directory for the view files

app.use('/', (req, res)=>{
    res.send("home")
})















app.listen(process.env.PORT, ()=>{
    console.log(`Server running on Port ${process.env.PORT}`)
})



