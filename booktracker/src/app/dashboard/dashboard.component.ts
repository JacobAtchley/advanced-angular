import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Book } from 'src/app/models/book';
import { Reader } from 'src/app/models/reader';
import { DataService } from 'src/app/core/data.service';
import { BookTrackerError } from 'src/app/models/bookTrackerError';
import { Subscription } from 'rxjs';
import { logNewerBooks, logEagerReaders } from '../core/book_tracker_operators';
import { ActivityLogService } from '../core/activity-log.service';
import { BooksState } from '../books/books.reducer';
import { getFavoriteBook } from '../books/books.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;
  bookSubscription: Subscription;
  readerSubscription: Subscription;
  readerOfTheMonth: Reader;
  favoriteBookSubscription: Subscription;

  constructor(private dataService: DataService,
              private title: Title,
              private activityService: ActivityLogService,
              private store: Store<BooksState>) { }

  ngOnInit() {

    this.booksSubscription = this.dataService.getAllBooks()
    .subscribe({
      next: (books) => this.allBooks = books,
      error: (error) => console.log('Error Getting Books....', error)
    });

    this.readersSubscription = this.dataService.getAllReaders()
      .pipe(
        logEagerReader(150)
      )
      .subscribe({
        next: (readers) => this.allReaders = readers,
        error: (error) => console.log('Error Getting Readers....', error)
      });

    // this.mostPopularBook = this.dataService.mostPopularBook;

    this.favoriteBookSubscription = this.store.pipe(
      select(getFavoriteBook)
    )
    .subscribe(
      book => this.mostPopularBook = book
    );

    this.readerOfTheMonth = this.dataService.readerOfTheMonth;

    this.title.setTitle(`Book Tracker`);
  }

  ngOnDestroy(): void {
    this.bookSubscription?.unsubscribe();
    this.readerSubscription?.unsubscribe();
    this.favoriteBookSubscription?.unsubscribe();
  }

  deleteBook(bookID: number): void {
    this.dataService.deleteBook(bookID)
      .subscribe(
        (data: void) => {
          const index: number = this.allBooks.findIndex(book => book.bookID === bookID);
          this.allBooks.splice(index, 1);
        },
        (err: any) => console.log(err)
      );
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

  log(activity: string) {
    this.activityService.logActivity(activity);
  }

}
