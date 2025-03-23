import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './Crud/edit/edit.component';
import { ReadComponent } from './Crud/read/read.component';
import { CreateComponent } from './Crud/create/create.component';

const routes: Routes = [
  { path: "Eusers/:id", component: EditComponent },

  { path: "show", component: ReadComponent },

  { path: "add", component: CreateComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
