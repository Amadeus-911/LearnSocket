const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')


//internal imports
const {notFound, errorHandler} = require('./middlewares/common/errorHandler')
const loginRouter = require('./routers/loginRouter')

dotenv.config()

const conn = require('./serverDB')
conn()



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cookieParser(process.env.SECRET))
app.set('view engine', 'ejs') // Setting EJS as template engine
app.set('views', __dirname + '/views') // Setting the directory for the view files

//routes
app.use('/', loginRouter)
// app.use('/user', userRouter)
// app.use('/inbox', inboxRouter)

//error Handlers
app.use(notFound)
app.use(errorHandler)


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on Port ${process.env.PORT}`)
})



