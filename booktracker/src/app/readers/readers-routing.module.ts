import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { AdminGuard } from '../guards/admin.guard';


const routes: Routes = [
  { path: 'addreader', component: AddReaderComponent },
  { path: 'editreader/:id', component: EditReaderComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadersRoutingModule { }
