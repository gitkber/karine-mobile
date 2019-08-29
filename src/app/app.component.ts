import { Component, OnInit } from '@angular/core';
import { TaskService } from './core/tasks/task.service';
import { map } from 'rxjs/operators';
import { Task } from './core/tasks/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'karine-mobile';

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasksList();
  }

  getTasksList() {
    this.taskService.getTasksList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

}
