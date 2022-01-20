import APIService from '@/services/APIService.js'; 

export default {
  getPokemons(pagina = 1, itensPorPagina = 20) {
    let offsetValue = itensPorPagina * pagina;
    return APIService.apiCall().get(`/pokemon?limit=${itensPorPagina}&offset=${offsetValue}`);
  },
  getPokemonInfo(nome) {
    return APIService.apiCall().get(`/pokemon/${nome}`);
  },
};