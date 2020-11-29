import { all, fork } from "redux-saga/effects";

import { profileSagaWatcher } from "./profileSaga";
import { counterSagaWatcher, counterSagaWatcher2 } from "./counterSaga";

export default function* rootSaga() {
  yield all([
    fork(profileSagaWatcher),
    fork(counterSagaWatcher),
    fork(counterSagaWatcher2),
  ]);
}
