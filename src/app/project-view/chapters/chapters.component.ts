import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger, MatDialog, MatTableDataSource } from '@angular/material';
import { ChapterFormComponent } from '../../forms/chapter/chapter.component';
import { Chapter } from '../../shared/chapter';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  chapters: Chapter[];
  dataSource = this.chapters;

  displayedColumns = ['id', 'title', 'buttons'];

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.chapters = this.getAll();
  }

  public getAll(): Chapter[] {
    const localStorageItem = JSON.parse(localStorage.getItem('chapters'));
    return localStorageItem == null ? [] : localStorageItem.chapters;
  }

  createChapter(): void {
    const chapters = this.chapters;

    const dialogRef = this.dialog.open(ChapterFormComponent, {
      width: '250px',
      data: {id: '', title: '' }
    });

    let chapterData = '';

    dialogRef.afterClosed().subscribe(result => {
      console.log('result is: ', result);
      chapterData = result;
      //chapters.push(chapterData);
      //localStorage.setItem('chapters', JSON.stringify(chapters));
      this.ngOnInit();
    });
  }

  edit(id) {
    console.log(id);
  }

  onRowClicked(id){
    console.log(id);
  }

  delete(id) {
    console.log(id);
  }

}
