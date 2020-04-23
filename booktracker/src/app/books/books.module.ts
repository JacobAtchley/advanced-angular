import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { BooksRoutingModule } from './books-routing.module';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookLibraryModule } from 'book-library';
import { booksReducer } from './books.reducer';


@NgModule({
  declarations: [
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule,
    BookLibraryModule,
    StoreModule.forFeature('books', booksReducer)
  ]
})
export class BooksModule { }
