import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { name: string, completed: boolean }[] = [];
  @Input() filter: string = 'all';

  getFilteredTasks() {
    if (this.filter === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else if (this.filter === 'incomplete') {
      return this.tasks.filter(task => !task.completed);
    } else {
      return this.tasks;
    }
  }

}

