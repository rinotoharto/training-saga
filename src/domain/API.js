import _ from "lodash";
import request from "../utils/request";
// const base_URL = 'https://pokeapi.co/api/v2/';
const base_URL = "https://pokeapi.co/api/v2/";
const secondaryURL = "https://dummyjson.com/";
const thirdURL = "https://jsonplaceholder.typicode.com/";

const urls = {
  get_all_pokemon: "pokemon",
  get_all_product: "auth/product",
  post_product: "posts",
  auth_login: "auth/login",
};

const callAPI = (
  endpoint,
  method,
  headers = {},
  params = {},
  data = {},
  baseURL
) => {
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const token = userProfile?.token;
  if (!_.isEmpty(token)) {
    _.extend(headers, {
      Authorization: `Bearer ${token}`,
    });
  }

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

export const authLogin = (data) => {
  return callAPI(urls.auth_login, "post", {}, {}, data, secondaryURL);
};
