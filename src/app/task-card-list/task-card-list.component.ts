import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'task-card-list',
  templateUrl: './task-card-list.component.html',
  styleUrls: ['./task-card-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskCardListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
