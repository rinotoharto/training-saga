import { call, put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import {
  GET_ALL_POKEMON,
  GET_ALL_PRODUCT,
  POST_PRODUCT,
  POST_USER,
} from "./store/constants/index";
import {
  authLogin,
  getAllPokemon,
  getAllProduct,
  postProduct,
} from "./domain/API";
import {
  setAllPokemon,
  setAllProduct,
  setProduct,
  setUser,
} from "./store/actions";
import { decryptData, encryptData } from "./utils/encryptionHelper";

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

function* doPostProduct({ product }) {
  try {
    const products = yield call(postProduct, product);
    const decryptedData = {
      title: decryptData(products.title),
      description: decryptData(products.description),
      thumbnail: decryptData(products.thumbnail),
    };
    console.log(decryptedData);
    yield put(setProduct(products));
  } catch (error) {
    console.log(error);
  }
}

function* doPostUser({ user, callback }) {
  try {
    const users = yield call(authLogin, user);
    yield put(setUser(users));
    if (users) {
      callback && callback();
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* mySaga() {
  yield takeLatest(GET_ALL_POKEMON, doGetAllPokemon);
  yield takeLatest(GET_ALL_PRODUCT, doGetAllProduct);
  yield takeLatest(POST_PRODUCT, doPostProduct);
  yield takeLatest(POST_USER, doPostUser);
}
