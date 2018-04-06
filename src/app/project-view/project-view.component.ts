import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Project } from '../shared/project';
import { ProjectStoreService } from '../shared/project-store.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  project: Project;

  constructor(
    private ps: ProjectStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.project = this.ps.getSingle(params['tag']);
  }

  home() {
    this.router.navigate(['']);
  }
}
