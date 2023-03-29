import { GET_ALL_POKEMON, SET_ALL_POKEMON } from '../constants/index';

export const getAllPokemon = () => {
  return {
    type: GET_ALL_POKEMON,
  }
}

export const setAllPokemon = (pokemons) => {
  return {
    type: SET_ALL_POKEMON,
    pokemons,
  }
}

