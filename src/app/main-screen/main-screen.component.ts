import { Component } from '@angular/core';
import { Project } from '../shared/project';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent{
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
