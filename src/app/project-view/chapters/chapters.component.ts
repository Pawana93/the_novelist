import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  chapters;

  displayedColumns = ['id', 'title', 'buttons'];

  constructor() { }

  ngOnInit() {
    const data = localStorage.getItem('chapters');
    this.chapters = JSON.parse(data);
  }

  /*createChapter(): void {
    const dialogRef = this.dialog.open(ChapterFormComponent, {
      width: '250px',
      data: {id: '', title: '' }
    });

    let projectData = '';

    dialogRef.afterClosed().subscribe(result => {
      console.log('result is: ', result);
      projectData = result;
      this.ps.create(projectData);
      this.ngOnInit();
    });
  }*/

  edit(id) {
    console.log(id);
  }

  delete(id) {
    console.log(id);
  }

  ngOnDestroy() {
    localStorage.setItem('chapters', this.chapters);
  }

}
