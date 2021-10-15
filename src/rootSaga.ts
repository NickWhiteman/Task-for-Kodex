import { all } from 'redux-saga/effects';
import { appSagaWatcher } from './saga/sagaWatchers';

export function* rootSaga() {
  yield all([
    appSagaWatcher()
  ]);
}