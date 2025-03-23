import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './Crud/create/create.component';
import { ReadComponent } from './Crud/read/read.component';
import { EditComponent } from './Crud/edit/edit.component';
import { NavbarComponent } from './Crud/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
   
    EditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
