import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBookComponent } from 'src/app/add-book/add-book.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { EditBookComponent } from 'src/app/edit-book/edit-book.component';
import { ReadersRoutingModule } from './readers/readers-routing.module';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addbook', component: AddBookComponent },
  { path: 'editbook/:id', component: EditBookComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ReadersRoutingModule]
})
export class AppRoutingModule { }
