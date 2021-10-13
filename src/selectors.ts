import { IAppState } from "./types";

export const getWords = (state: IAppState): string[] =>
  state.words;

export const getNumbers = (state: IAppState): number[] =>
  state.numbers;

export const getHybrids = (state: IAppState): string[] =>
  state.hybrids;