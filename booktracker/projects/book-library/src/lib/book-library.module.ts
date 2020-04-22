import { NgModule } from '@angular/core';
import { BookLibraryComponent } from './book-library.component';
import { ThanksContributorComponent } from './thanks-contributor/thanks-contributor.component';



@NgModule({
  declarations: [BookLibraryComponent, ThanksContributorComponent],
  imports: [
  ],
  exports: [BookLibraryComponent, ThanksContributorComponent]
})
export class BookLibraryModule { }
