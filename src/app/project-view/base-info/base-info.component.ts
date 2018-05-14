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

  project;

  constructor(
    private ps: ProjectStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let data = localStorage.getItem('baseInfo');
    this.project = JSON.parse(data);
    console.log(this.project);
  }
}
