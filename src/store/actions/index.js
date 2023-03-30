import { GET_ALL_POKEMON, GET_ALL_PRODUCT, POST_PRODUCT, SET_ALL_POKEMON, SET_ALL_PRODUCT, SET_PRODUCT } from '../constants/index';

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

export const getAllProduct = () => {
  return {
    type: GET_ALL_PRODUCT,
  }
}

export const setAllProduct = (products) => {
  return {
    type: SET_ALL_PRODUCT,
    products,
  }
}

export const postProduct = (product) => {
  return {
    type: POST_PRODUCT,
    product,
  }
}

export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    product,
  }
}
