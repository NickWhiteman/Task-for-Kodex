import { takeLatest } from "@redux-saga/core/effects";
import { sagaActions } from "./sagaActions";
import { sortsDataTimeSaga, sortDataAlphabetSaga } from "./sagaWorkers";

export function* appSagaWatcher() {
  yield takeLatest(sagaActions.sortTime, sortsDataTimeSaga);
  yield takeLatest(sagaActions.sortAlphabet.type, sortDataAlphabetSaga);
}