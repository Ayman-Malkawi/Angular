import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetcategoryComponent } from './Dashbord/getcategory/getcategory.component';
import { AddcategoryComponent } from './Dashbord/addcategory/addcategory.component';
import { GetproductComponent } from './Dashbord/getproduct/getproduct.component';
import { AddproductComponent } from './Dashbord/addproduct/addproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashComponent } from './Dashbord/dash/dash.component';
import { EditComponent } from './Dashbord/edit/edit.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GetcategoryComponent,
    AddcategoryComponent,
    GetproductComponent,
    AddproductComponent,
    NavbarComponent,
    DashComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
