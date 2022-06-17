console.log('I am ready')

let pokemon

fetch('https://pokeapi.co/api/v2/pokemon')
.then(res => res.json())
.then(doSomething)

function doSomething(pokemonData) {
  pokemon = pokemonData
  pokemon.forEach(poke => {
    element.addEventListener('click', () => {
      fetch(poke.url)
    })
  })
}
