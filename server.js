require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
// const Index = require('./views/Index.jsx')

const app = express();

//TODO: Data
const pokemon = require('./models/pokemon')

//* Configuration
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine())

//* Middleware
app.use((req, res, next) => {
    console.log(req.body);
    console.log('I run for all the routes')
    next();
    //? next() - ensures that the request continues to be processed and that you get a response
})

app.use(express.urlencoded({extended: false}))

//* Homepage
app.get('/',(req,res) => {
    res.send(`Welcome to the Pokemon App!`)
})

app.get('/pokemon', (req, res) => {
    // console.log(pokemon)
    res.render('Index', {pokemon: pokemon})
})


//* Listening
app.listen(8000, () => {
    console.log(`Port 8000: Listening...`);
    //? connecting to mongoDB, can be done in other folder
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!');
    })
})