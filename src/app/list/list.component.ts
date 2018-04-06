import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectStoreService } from '../shared/project-store.service';
import { Project } from '../shared/project';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { ProjectFormComponent } from '../forms/project-form/project-form.component';

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

  constructor(private ps: ProjectStoreService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.projects = this.ps.getAll();
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
    this.router.navigate([row.tag]);
  }

  createProject() {
    console.log('opened dialog');
    const dialogRef = this.dialog.open(ProjectFormComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result === 'undefined') {
        return;
      }

      const project = {
        title: result.title,
        tag: result.tag,
        description: result.description
      };
      console.log('result: ', project);
    });
  }

  edit(tag) {
    console.log('project edited: ', tag);
  }

  delete(tag) {
    console.log('project deleted: ', tag);
  }
}
