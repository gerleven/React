export const getPokemons = ()=>{
    let urlApi = "https://pokeapi.co/api/v2/pokemon/";
    return fetch(urlApi);
}