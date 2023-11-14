import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { name: string, completed: boolean }[] = [];
  filter: string = 'all';

  addTask(task: string){
    this.tasks.push({ name: task, completed: false });
  }

  setFilter(filter: string) {
    this.filter = filter;
  }
  
}

