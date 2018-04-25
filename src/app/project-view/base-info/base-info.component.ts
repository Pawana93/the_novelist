import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Project } from '../../shared/project';
import { ProjectStoreService } from '../../shared/project-store.service';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {

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
}
