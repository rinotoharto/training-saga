import { call, put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import {
  GET_ALL_GUEST,
} from "./store/constants/index";
import {
  getAllGuest,
} from "./domain/API";
import {
  setGuests,
  setMessages,
} from "./store/actions";

function* doGetAllGuest() {
  try {
    const guestsData = yield call(getAllGuest);
    const messages = guestsData?.guests.filter((item) => {
      return !_.isEmpty(item.message);
    });
    yield put(setMessages(messages.reverse()));
    yield put(setGuests(guestsData.guests));
  } catch (error) {
    console.log(error);
  }
}

export default function* mySaga() {
  yield takeLatest(GET_ALL_GUEST, doGetAllGuest);
}
