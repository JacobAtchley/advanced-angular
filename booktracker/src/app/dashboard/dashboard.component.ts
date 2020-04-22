import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'src/app/models/book';
import { Reader } from 'src/app/models/reader';
import { DataService } from 'src/app/core/data.service';
import { Subscription } from 'rxjs';
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

  readersSubscription: Subscription;

  constructor(private dataService: DataService,
              private title: Title) { }

  ngOnDestroy(): void {
    this.readersSubscription?.unsubscribe();
  }

  ngOnInit() {

    this.allBooks = this.dataService.getAllBooks();

    this.readersSubscription = this.dataService.getAllReaders()
      .pipe(
        logEagerReader(150)
      )
      .subscribe({
        next: (readers) => this.allReaders = readers,
        error: (error) => console.log('Error Getting Readers....', error)
      });

    this.mostPopularBook = this.dataService.mostPopularBook;

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
