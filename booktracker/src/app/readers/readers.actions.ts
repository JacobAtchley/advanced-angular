import { createAction, props } from '@ngrx/store';
import { Reader } from '../models/reader';

export const changeReaderOfTheMonth = createAction('[Readers] - Change Reader Of The Month',
props<{readerOfTheMonth: Reader}>())
