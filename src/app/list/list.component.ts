import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectStoreService } from '../shared/project-store.service';
import { Project } from '../shared/project';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  projects: Project[];
  displayedColumns = ['tag', 'name', 'description', 'buttons'];
  dataSource = this.projects;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private ps: ProjectStoreService, private router: Router) { }

  ngOnInit() {
    this.projects = this.ps.getAll();
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
    this.router.navigate([row.tag]);
  }

  createProject() {
    console.log('project created');
  }
}
