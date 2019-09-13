import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, getPathOfCategory, Task } from '../../core/model';
import { FacadeService } from '../../core/service/facade.service';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {

  today: Date = new Date();
  tasks: Task[];

  todayTasksSize: number;
  tomorrowTasksSize: number;

  todaySelected: boolean;
  tomorrowSelected: boolean;

  constructor(private facadeService: FacadeService, private router: Router) { }

  ngOnInit() {
    this.goPresent();
    this.facadeService.taskService.futureList().subscribe(tasks => {
      this.tomorrowTasksSize = tasks.length;
    });
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }

  acceptTask(task: Task) {
    this.facadeService.acceptTask(task);
  }

  consultTask(task: Task) {
    this.router.navigate(['/consultTask', task.key]);
  }

  goFuture() {
    this.facadeService.taskService.futureList().subscribe(tasks => {
      this.tasks = tasks;
      this.todaySelected = false;
      this.tomorrowSelected = true;
    });
  }

  goPresent() {
    this.facadeService.taskService.presentList().subscribe(tasks => {
      this.tasks = tasks;
      this.todayTasksSize = tasks.length;
      this.todaySelected = true;
      this.tomorrowSelected = false;
    });
  }
}
