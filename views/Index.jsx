
const React = require('react')

const heading = {
    color: '#D21312',
    textAlign: 'center',
    textDecoration: 'underline'
}

function Index(props) {
    const {pokemon} = props;
    // console.log(pokemon);
  return (
    <>
    <div style={heading}>
    <h1> See All the Pokemon!</h1>
    </div>
    <div>
        <ul>
            {
                pokemon.map((pokemon, i) => {
                    return (
                        <li key={pokemon.name}>
                            <a href ={`/pokemon/${pokemon.name}`} > {pokemon.name} </a>
                            <br/>
                            <img src={pokemon.img}/>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    </>
    
  )
}

module.exports = Index
