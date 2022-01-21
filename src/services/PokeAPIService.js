import APIService from '@/services/APIService.js'; 

export default {
  getPokemons(page = 1, itensPerPage = 24) {
    let offsetValue = itensPerPage * (page - 1);
    return APIService.apiCall().get(`/pokemon?limit=${itensPerPage}&offset=${offsetValue}`);
  },
  getPokemonInfo(nome) {
    return APIService.apiCall().get(`/pokemon/${nome}`);
  },
};