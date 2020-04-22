import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadersRoutingModule } from './readers-routing.module';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { FormsModule } from '@angular/forms';
import { ReaderLibraryModule } from 'reader-library';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookComponent,
    EditReaderComponent,
    EditBookComponent,
    AddReaderComponent,
  ],
  imports: [
    CommonModule,
    ReadersRoutingModule,
    FormsModule,
    ReaderLibraryModule,
  ]
})
export class ReadersModule { }
