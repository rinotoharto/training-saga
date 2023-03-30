import _ from "lodash";
import request from "../utils/request";
// const base_URL = 'https://pokeapi.co/api/v2/';
const base_URL = "https://pokeapi.co/api/v2/";
const secondaryURL = "https://dummyjson.com/";
const thirdURL = "https://jsonplaceholder.typicode.com/";

const urls = {
  get_all_pokemon: "pokemon",
  get_all_product: "products",
  post_product: "posts",
};

const callAPI = (
  endpoint,
  method,
  headers = {},
  params = {},
  data = {},
  baseURL
) => {
  const options = {
    baseURL: baseURL,
    url: endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response && response.data;
    return responseAPI;
  });
};

export const getAllPokemon = () => {
  return callAPI(urls.get_all_pokemon, "get", {}, {}, {}, base_URL);
};

export const getAllProduct = () => {
  return callAPI(urls.get_all_product, "get", {}, {}, {}, secondaryURL);
};

export const postProduct = (data) => {
  console.log(data);
  return callAPI(urls.post_product, "post", {}, {}, data, thirdURL);
};
