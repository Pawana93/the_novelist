import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  chapters;

  constructor() { }

  ngOnInit() {
    const data = localStorage.getItem('chapters');
    this.chapters = JSON.parse(data);
  }

}
