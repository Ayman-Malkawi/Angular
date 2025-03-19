import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DashComponent } from './Dashbord/dash/dash.component';
import { GetcategoryComponent } from './Dashbord/getcategory/getcategory.component';
import { GetproductComponent } from './Dashbord/getproduct/getproduct.component';
import { AddproductComponent } from './Dashbord/addproduct/addproduct.component';
import { AddcategoryComponent } from './Dashbord/addcategory/addcategory.component';
import { EditComponent } from './Dashbord/edit/edit.component';

const routes: Routes = [
  {
    path: "dash", component: DashComponent, children: [
      { path: "getcategory", component: GetcategoryComponent },
      { path: "getproduct", component: GetproductComponent },
      { path: "addcategory", component: AddproductComponent },
      { path: "addproduct", component: AddcategoryComponent },

      { path: "edit/:id", component: EditComponent }


    ]},

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
