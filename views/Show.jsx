
const React = require('react')
// const pokemon = require('../models/pokemon')

const heading = {
    color: '#D21312',
    textAlign: 'center',
    textDecoration: 'underline'
}

function Show(props) {
    const {pokemon} = props;
    console.log(pokemon);
  return (
    <div style={heading}>
    <h1> Gotta Catch 'Em All!</h1>
    <h2> {pokemon.name} </h2>
    <img src={pokemon.img + '.jpg'}/>
    <a href='/pokemon'>Back</a>
    </div>
    
  )
}

module.exports = Show