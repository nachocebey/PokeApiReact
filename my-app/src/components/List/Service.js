const allPokemonsFromApi = () => {
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon/`;
  fetch(pokeUrl)
  .then( response => response.json())
  .then( data=> {})
}
//PILLAR ARRAYYYYYYYYYYYYYy
export default allPokemonsFromApi;
