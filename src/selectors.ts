import { RootState } from "./store";
import { IAppState } from "./types";

export const getWords = (state: IAppState): string[] =>
  state.words;

export const getNumbers = (state: IAppState): string[] =>
  state.numbers;

export const getHybrids = (state: IAppState): string[] =>
  state.hybrids;

export const getStore = (state: RootState) =>
  state.appStore;
