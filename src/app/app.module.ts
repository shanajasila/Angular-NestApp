import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceHomeComponent } from './service-home/service-home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { Route, RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"service",
    component:ServiceHomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceHomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
