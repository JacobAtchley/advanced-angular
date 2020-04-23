import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReaderLibraryModule } from 'reader-library';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { ReadersRoutingModule } from './readers-routing.module';
import { StoreModule } from '@ngrx/store';
import { readersReducer } from './readers.reducer';

@NgModule({
  declarations: [
    EditReaderComponent,
    AddReaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReadersRoutingModule,
    ReaderLibraryModule,
    StoreModule.forFeature('readers', readersReducer)
  ]
})
export class ReadersModule { }
