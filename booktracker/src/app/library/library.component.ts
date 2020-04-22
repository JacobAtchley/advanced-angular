import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../core/data.service';
import { Book } from '../models/book';

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

  onIncreased(amount:string){
    console.log('On Increase', amount);
  }

  onDecreased(amount:string){
    console.log('On Decrease', amount);
  }
}
