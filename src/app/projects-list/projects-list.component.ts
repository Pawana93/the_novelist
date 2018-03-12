import { Component, OnInit } from '@angular/core';

import { Project } from '../shared/project';
import { ProjectStoreService } from '../shared/project-store.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];
  
  constructor(private ps: ProjectStoreService) { }

  ngOnInit() {
    this.projects = this.ps.getAll();
  }
}
