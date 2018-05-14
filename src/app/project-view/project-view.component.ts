import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Project } from '../shared/project';
import { ProjectStoreService } from '../shared/project-store.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent {

  constructor(
    private ps: ProjectStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  home() {
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.ps.clearProjectData();
  }
}
