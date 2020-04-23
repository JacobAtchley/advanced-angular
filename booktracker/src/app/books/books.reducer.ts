import { Action, createReducer, on } from '@ngrx/store';
import * as BookActions from './books.actions';
import { Book } from '../models/book';
import { allBooks } from '../data';

export interface BooksState {
  favoriteBook: Book
}

export const initialState: BooksState = {
  favoriteBook: allBooks[0]
}

const _booksReducer = createReducer(
  initialState,
  on(BookActions.updateFavoriteBook, (state, { favoriteBook }) => ({ ...state, favoriteBook: favoriteBook }))
);

export function booksReducer(state: BooksState | undefined, action: Action) {
  return _booksReducer(state, action);
}
