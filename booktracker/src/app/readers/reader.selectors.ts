import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ReadersState } from './readers.reducer';

export const getReaderState = createFeatureSelector<ReadersState>('readers');

export const getReaderOfTheMonth = createSelector(
  getReaderState,
  (state) => state.readerOfTheMonth
);
