const getPokeInfo = (url) => fetch(url)
  .then( response => response.json())


export default getPokeInfo;


