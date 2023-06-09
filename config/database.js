const mongoose = require('mongoose')

//! Global Configuration
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection

module.exports = function () {
     //? connection to MongoDb
     mongoose.set('strictQuery', true)
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    

     //? listen for error on connection
     db.on('error', (error) => console.error(error))
     db.on('open', () => console.log('Connected to MongoBD'))
     db.on('close', () => console.log('Mongo Disconnected'))
}