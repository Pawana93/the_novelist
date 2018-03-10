import { Component, Input } from '@angular/core';

import { Project } from '../shared/project';

@Component({
  selector: 'a.app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.css']
})
export class ProjectsListItemComponent {
  @Input() project: Project;
}
