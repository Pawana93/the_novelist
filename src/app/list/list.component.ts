import { Component, OnInit } from '@angular/core';
import { ProjectStoreService } from '../shared/project-store.service';
import { Project } from '../shared/project';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  displayedColumns = ['tag', 'name'];
  dataSource = PROJECT_DATA;

  constructor(private ps: ProjectStoreService) { }

  ngOnInit() {
    
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }
}

export interface Element {
  tag: string;
  title: string;
}

const PROJECT_DATA: Element[] = [
  {tag: 'AnH', title: 'A new hope'},
  {tag: 'D', title: 'Dawn'},
  {tag: 'End', title: 'End'}
];
