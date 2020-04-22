import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { LibraryComponent } from './library/library.component';
import { ReadersRoutingModule } from './readers/readers-routing.module';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'library', component: LibraryComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ReadersRoutingModule]
})
export class AppRoutingModule { }
