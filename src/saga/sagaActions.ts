import { createAction } from '@reduxjs/toolkit';
import { IAppState } from '../types';

const SORT_TIME = 'SORT_TIME';
const SORT_ALPHABET = 'SORT_ALPHABET'

export const sagaActions = {
  sortTime: createAction<IAppState>(SORT_TIME),
  sortAlphabet: createAction(SORT_ALPHABET)
};