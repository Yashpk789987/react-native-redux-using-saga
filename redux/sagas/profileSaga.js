import { call, put, takeLatest } from "redux-saga/effects";

import { CALL_API } from "../actionCreaters/profile";
import { setDataAfterCallApi } from "../actions/profile";
import { fetchData } from "../apis";

function* getApiData(action) {
  try {
    const url = action.payload;
    const data = yield call(fetchData, url);
    yield put(setDataAfterCallApi(data.results[0].email));
  } catch (e) {
    console.log(e);
  }
}

export function* profileSagaWatcher() {
  yield takeLatest(CALL_API, getApiData);
}
