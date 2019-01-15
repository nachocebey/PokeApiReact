const allPokemonsFromApi = () => {
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon/`;
  fetch(pokeUrl)
  .then( response => response.json())
  .then( data => data.results)
}

export default allPokemonsFromApi;
