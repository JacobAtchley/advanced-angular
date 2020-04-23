import { createSelector, createFeatureSelector } from '@ngrx/store';
	
import { BooksState } from './books.reducer';

export const getBookState = createFeatureSelector<BooksState>('books');

export const getFavoriteBook = createSelector(
  getBookState,
  (state: BooksState) => state.favoriteBook
);
