import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();
  filter: string = 'all';  

  setFilter(filter: string) {
    this.filter = filter;
    this.filterChanged.emit(this.filter); 
  }
}
