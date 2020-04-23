import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

export const updateFavoriteBook = createAction(
  '[EditBook Component] Update Favorite Book',
  props<{favoriteBook: Book}>()
);
