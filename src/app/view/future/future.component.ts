import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../core/tasks/task.service';
import { Category, getPathOfCategory, Task } from '../../core/tasks/task';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.taskService.futureList().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  consultTask(task: Task) {
    this.router.navigate(['/consultTask', task.key]);
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }
}
