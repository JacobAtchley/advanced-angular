import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/data.service';
import { Book } from 'src/app/models/book';
import { Reader } from 'src/app/models/reader';
import { logEagerReader } from '../core/logEagerReaders.operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;
  readerOfTheMonth: Reader;

  readersSubscription: Subscription;
  booksSubscription: Subscription;

  constructor(private dataService: DataService,
              private title: Title) { }

  ngOnDestroy(): void {
    this.readersSubscription?.unsubscribe();
    this.booksSubscription?.unsubscribe();
  }

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

    this.mostPopularBook = this.dataService.mostPopularBook;
    this.readerOfTheMonth = this.dataService.readerOfTheMonth;

    this.title.setTitle(`Book Tracker`);
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
}
