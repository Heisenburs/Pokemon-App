const mongoose = require('mongoose')

//? create Schema
const pokeSchema = new mongoose.Schema({
    name: String,
})

const PokeDeck = mongoose.model('Pokemon', pokeSchema)

module.exports = PokeDeck;