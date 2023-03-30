import { call, put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import { GET_ALL_POKEMON, GET_ALL_PRODUCT } from "./store/constants/index";
import { getAllPokemon, getAllProduct } from "./domain/API";
import { setAllPokemon, setAllProduct } from "./store/actions";

function* doGetAllPokemon() {
  try {
    const pokemons = yield call(getAllPokemon);
    // console.log(pokemons, '<<< pokemons saga');
    yield put(setAllPokemon(pokemons));
  } catch (error) {
    console.log(error);
  }
}

function* doGetAllProduct() {
  try {
    const products = yield call(getAllProduct);
    // console.log(products,"<<products")
    yield put(setAllProduct(products));
  } catch (error) {
    console.log(error);
  }
}

export default function* mySaga() {
  yield takeLatest(GET_ALL_POKEMON, doGetAllPokemon);
  yield takeLatest(GET_ALL_PRODUCT, doGetAllProduct);
}
