import { Component } from '@angular/core';
import { Project } from './shared/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "The Novelist";
  listOn = true;
  detailsOn = false;

  project: Project;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(project: Project) {
    this.project = project;
    this.listOn = false;
    this.detailsOn = true;
  }
}
