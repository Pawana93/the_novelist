import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Project } from '../shared/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];
  @Output() showDetailsEvent = new EventEmitter<Project>();

  ngOnInit() {
    this.projects = [
      new Project('A new hope', 'Eine neue Hoffnung erscheint im Angesicht des Todes'),
      new Project('Dawn', 'Ein dunkler Schatten erhebt sich'),
      new Project('End', 'Alles hat ein Ende, nur die Wurst hat zwei')
    ];
  }

  showDetails(project: Project) {
    this.showDetailsEvent.emit(project);
  }
}
