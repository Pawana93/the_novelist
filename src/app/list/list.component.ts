import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectStoreService } from '../shared/project-store.service';
import { Project } from '../shared/project';
import { MatMenuTrigger, MatDialog, MatTableDataSource } from '@angular/material';
import { ProjectFormComponent } from '../forms/project-form/project-form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  project: Project;
  projects: Project[];
  displayedColumns = ['tag', 'name', 'description', 'buttons'];
  dataSource = this.projects;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private ps: ProjectStoreService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    // this.projects = this.ps.getAll();
    this.refresh();
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
    this.router.navigate([row.tag]);
  }

  createProject(): void {
    const dialogRef = this.dialog.open(ProjectFormComponent, {
      width: '250px',
      data: {title: '', tag: '', description: '' }
    });

    let projectData = '';

    dialogRef.afterClosed().subscribe(result => {
      console.log('result is: ', result);
      projectData = result;
      this.ps.create(projectData);
      // this.projects = this.ps.getAll();
      this.refresh();
      console.log(this.projects);
    });
  }

  refresh() {
    this. projects = this.ps.getAll();
  }

  edit(tag) {
    console.log('project edited: ', tag);
  }

  delete(tag) {
    console.log('project deleted: ', tag);
  }
}
