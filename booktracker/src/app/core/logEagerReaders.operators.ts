import { Observable } from 'rxjs';
import { Reader } from '../models/reader';
import { tap } from 'rxjs/operators';

export function logEagerReader(minutes: number){
  return (source$: Observable<Reader[]>) => source$.pipe(
    tap(readers => console.log('Eager Readers', readers.filter(reader => reader.weeklyReadingGoal > minutes)))
  )
}
