require('dotenv').config();


const express = require('express');
const connectToDb = require('./config/database')
// const mongoose = require('mongoose');
// const Index = require('./views/Index.jsx')
// const PokeDeck = require('./models/PokeDeck')

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

//! Show Route
app.get('/pokemon/:id', (req, res) => {
    const {name} = req.params;
    res.render('Show', {pokemon: pokemon[req.params.id]});
})

// app.get("/pokemon/:id", (req, res) => {
//     pokemon.findById(req.params.id, (error, foundPoke) => {
//       res.render("Show", { pokemon: foundPoke });
//     });
//   });

//! Index Route
app.get('/pokemon', (req, res) => {
    // console.log(pokemon)
    res.render('Index', {pokemon: pokemon})
//    PokeDeck.find({}, (error, allPokemon) => {
//     res.render('pokemon/Index', {pokemon: allPokemon})
//    })
})


//* Listening
app.listen(8000, () => {
    console.log(`Port 8000: Listening...`);
    //? connecting to mongoDB, done in other folder
    connectToDb()
   
})