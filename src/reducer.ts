import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState } from "./types";

const STORE_NAME = '@app';
const initialState: IAppState = {
  words: [],
  numbers: [],
  hybrids: []
};

const AppStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setWords(state, {payload}: PayloadAction<string>) {
      state.words.push(payload);
    },
    setNumbers(state, { payload }: PayloadAction<number>) {
      state.numbers.push(payload);
    },
    setHybrids(state, { payload }: PayloadAction<string>) {
      state.hybrids.push(payload);
    },
  }
});

export const AppAction = {
  ...AppStore.actions
};

export const appReducer = AppStore.reducer;
