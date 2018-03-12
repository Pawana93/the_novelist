import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { ProjectsListItemComponent } from './projects-list-item/projects-list-item.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

import { ProjectStoreService } from './shared/project-store.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectsDetailsComponent,
    ProjectsListItemComponent,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProjectStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
