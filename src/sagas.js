import { call, put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import {
  GET_ALL_POKEMON,
} from "./store/constants/index";
import {
  getAllPokemon,
} from "./domain/API";
import {
  setAllPokemon,
} from "./store/actions";

function* doGetAllPokemon() {
  try {
    const pokemons = yield call(getAllPokemon);
    console.log(pokemons, '<<< pokemons saga');
    yield put(setAllPokemon(pokemons));
  } catch (error) {
    console.log(error);
  }
}

export default function* mySaga() {
  yield takeLatest(GET_ALL_POKEMON, doGetAllPokemon);
}
