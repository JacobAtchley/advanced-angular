import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { readersReducer } from './readers.reducer';
@NgModule({
  imports: [
    StoreModule.forFeature('readers', readersReducer)
  ]
})
export class ReadersStoreModule {
}
