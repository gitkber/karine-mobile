import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../tasks/task.service';
import { Category, getPathOfCategory, Task } from '../../tasks/task';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.taskService.presentList().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }

  acceptTask(task: Task) {
    this.taskService.acceptTask(task);
  }

  consultTask(task: Task) {
    this.router.navigate(['/consultTask', task.key]);
  }
}
