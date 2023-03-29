import { all } from "redux-saga/effects";

import mainSaga from "./sagas";

export default function* rootSaga() {
  yield all([mainSaga()]);
}
