import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookLibraryModule } from 'book-library';


@NgModule({
  declarations: [
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule,
    BookLibraryModule
  ]
})
export class BooksModule { }
