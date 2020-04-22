import { Observable } from "rxjs";
import { Book } from "../models/book";
import { tap } from "rxjs/operators";
import { Reader } from "../models/reader";

export function logNewerBooks(year: number) {
  return (source$: Observable<Book[]>) => source$.pipe(
    tap(books => books.forEach(b => b.publicationYear > year ? console.log(b): null))
  );
}

export function logEagerReaders(minutes: number) {
  return (source$: Observable<Reader[]>) => source$.pipe(
    tap(readers => readers.forEach(r => r.weeklyReadingGoal > minutes ? console.log(r.name) : null))
  );
}