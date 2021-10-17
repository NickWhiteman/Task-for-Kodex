import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState } from "./types";

const STORE_NAME = '@app';
const initialState: IAppState = {
  words: [],
  numbers: [],
  hybrids: [],
  isSortTime: true,
  isSortAlphabet: false
};

const AppStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setWords(state, {payload}: PayloadAction<string>) {
      // typeof payload === 'string'
      state.words.push(payload)
      // : state.words = [...payload]
    },
    setNumbers(state, { payload }: PayloadAction<string>) {
      // typeof payload === 'string'
        state.numbers.push(payload)
        // : state.numbers = [...payload]
    },
    setHybrids(state, { payload }: PayloadAction<string>) {
      // typeof payload === 'string'
      state.hybrids.push(payload)
      // : state.hybrids = [...payload]
    },
    setWordsList(state, { payload }: PayloadAction<string[]>) {
      state.words = payload;
    },
    setNumbersList(state, { payload }: PayloadAction<string[]>) {
      state.numbers = payload;
    },
    setHybridsList(state, { payload }: PayloadAction<string[]>) {
      state.hybrids = payload;
    },
    setSortTime(state) {
      state.isSortTime = !state.isSortTime;
    },
    setSortAlphabet(state) {
      state.isSortAlphabet = !state.isSortAlphabet;
    }
  }
});

export const AppAction = {
  ...AppStore.actions
};

export const appReducer = AppStore.reducer;
