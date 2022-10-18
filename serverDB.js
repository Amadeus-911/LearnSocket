const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoURI = process.env.MONGOURI

async function conn()  {
    let connect = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    try {
        await connect
        console.log('MongoDB connected')
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports = conn