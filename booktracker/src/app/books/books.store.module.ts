import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './books.reducer';
@NgModule({
  imports: [
    StoreModule.forFeature('books', booksReducer)
  ]
})
export class BooksStoreModule {
}
