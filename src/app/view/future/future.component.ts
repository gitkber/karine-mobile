import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, getPathOfCategory, Note } from '../../core/model';
import { TaskService } from '../../core/service/task.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  today: Date = new Date();
  tasks: Note[];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.taskService.futureList().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  consultTask(task: Note) {
    this.router.navigate(['/consultTask', task.key]);
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }
}
