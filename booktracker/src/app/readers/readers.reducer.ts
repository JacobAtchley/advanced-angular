import { createReducer, on, Action } from '@ngrx/store';
import { Reader } from '../models/reader';
import * as fromReaderActions from './readers.actions';

export interface ReadersState {
  readerOfTheMonth: Reader
}

export const initialState: ReadersState = {
  readerOfTheMonth: null
}

const _setReaderOfTheMonth = createReducer(
  initialState,
  on(fromReaderActions.changeReaderOfTheMonth, (state, { readerOfTheMonth }) => ({...state, readerOfTheMonth})))

  export function readersReducer(state: ReadersState | undefined, action: Action) {
    return _setReaderOfTheMonth(state, action);
  }
