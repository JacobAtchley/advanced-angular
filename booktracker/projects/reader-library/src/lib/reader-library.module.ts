import { NgModule } from '@angular/core';
import { ReaderLibraryComponent } from './reader-library.component';
import { GrettingComponent } from './gretting/gretting.component';
import { GreetingComponent } from './greeting/greeting.component';



@NgModule({
  declarations: [ReaderLibraryComponent, GrettingComponent, GreetingComponent],
  imports: [
  ],
  exports: [ReaderLibraryComponent]
})
export class ReaderLibraryModule { }
