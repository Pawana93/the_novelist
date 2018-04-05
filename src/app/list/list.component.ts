import { Component, OnInit } from '@angular/core';
import { ProjectStoreService } from '../shared/project-store.service';
import { Project } from '../shared/project';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  projects: Project[];
  displayedColumns = ['tag', 'name'];
  dataSource = this.projects;

  constructor(private ps: ProjectStoreService) { }

  ngOnInit() {
    this.projects = this.ps.getAll();
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }
}
