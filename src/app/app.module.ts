import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
