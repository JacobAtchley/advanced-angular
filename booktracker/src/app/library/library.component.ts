import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../models/book';
import { DataService } from '../core/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, OnDestroy {

  totalBookCount: number;
  allBooks: Book[];
  branch: string = 'Midtown';
  bookSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.bookSubscription = this.dataService.getAllBooks()
      .subscribe(
        books => this.totalBookCount = books.length
      );
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }

}
