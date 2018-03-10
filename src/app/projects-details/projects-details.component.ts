import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '../shared/project';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent {
  @Input() project: Project;
  @Output() showListEvent = new EventEmitter<any>();

  showProjectList() {
    this.showListEvent.emit();
  }
}
