import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddemployeesComponent } from './addemployees/addemployees.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewallComponent } from './viewall/viewall.component';
import { SearchComponent } from './search/search.component';

const appRoutes:Routes=[
  {
    path:"",component:AddemployeesComponent
  },
  {
    path:"view",component:ViewallComponent
  },
  {
    path:"search",component:SearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddemployeesComponent,
    ViewallComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
