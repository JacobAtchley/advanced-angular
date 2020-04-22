import { NgModule } from '@angular/core';
import { ReaderLibraryComponent } from './reader-library.component';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  declarations: [ReaderLibraryComponent, GreetingComponent],
  imports: [  ],
  exports: [ReaderLibraryComponent, GreetingComponent]
})
export class ReaderLibraryModule { }
