import { put, select } from "@redux-saga/core/effects";
import { AppAction } from "../reducer";
import { getHybrids, getNumbers, getWords } from "../selectors";
import { RootState } from "../store";

export function* sortsDataTimeSaga() {
  const words: string[] = yield select((state: RootState) => getWords(state.appStore));
  console.log(words);
  
  const numbers: string[] = yield select((state: RootState) => getNumbers(state.appStore));
  console.log(numbers);
  
  const hybrids: string[] = yield select((state: RootState) => getHybrids(state.appStore));
  console.log(hybrids);
  

  const sortWords: string[] = words && words.reverse();
  const sortNumbers: string[] = numbers && numbers.reverse();
  const sortHybrids: string[] = hybrids && hybrids.reverse();

  // sortWords && 
  yield put(AppAction.setSortWords(sortWords));
  // sortNumbers &&
  yield put(AppAction.setSortNumbers(sortNumbers));
  // sortHybrids &&
  yield put(AppAction.setSortHybrids(sortHybrids));
};

export function* sortDataAlphabetSaga() {
  const words: string[] = yield select(getWords);
  const numbers: string[] = yield select(getNumbers);
  const hybrids: string[] = yield select(getHybrids);

  const sortWords: string[] = words && words.sort();
  const sortNumbers: string[] = numbers && numbers.sort();
  const sortHybrids: string[] = hybrids && hybrids.sort();
};