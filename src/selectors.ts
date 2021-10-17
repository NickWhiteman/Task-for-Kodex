import { IAppState } from "./types";

export const getWords = (state: IAppState): string[] =>
  state.words;

export const getNumbers = (state: IAppState): number[] | string[] =>
  state.numbers;

export const getHybrids = (state: IAppState): string[] =>
  state.hybrids;

export const getIsSortTime = (state: IAppState): boolean =>
  state.isSortTime;

export const getIsSortAlphabet = (state: IAppState): boolean =>
  state.isSortAlphabet;