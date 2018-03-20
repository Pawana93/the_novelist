import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsListItemComponent } from './projects-list-item/projects-list-item.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { ProjectStoreService } from './shared/project-store.service';
import { ProjectResolverService } from './shared/project-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectsListItemComponent,
    ProjectsDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ProjectStoreService,
    ProjectResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
