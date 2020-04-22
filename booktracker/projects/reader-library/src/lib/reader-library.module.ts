import { NgModule } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';
import { ReaderGreetingComponent } from './reader-greeting/reader-greeting.component';
import { ReaderLibraryComponent } from './reader-library.component';

@NgModule({
  declarations: [ReaderLibraryComponent, GreetingComponent, ReaderGreetingComponent],
  imports: [  ],
  exports: [ReaderLibraryComponent, GreetingComponent, ReaderGreetingComponent]
})

export class ReaderLibraryModule { }
