import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Category, Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

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

  getPath(category: Category): string {
    switch (category) {
      case Category.HOME:
        return '../../../../assets/img/category/budget_house2_32.png';
      case Category.TRANSPORT:
        return '../../../../assets/img/category/budget_car_32.png';
      case Category.WELLNESS:
        return '../../../../assets/img/category/health_prenatal_32.png';
      case Category.OBJECTIVE:
        return '../../../../assets/img/category/objective_target_32.png';
      case Category.OTHER:
        return '../../../../assets/img/category/other_catalog_64.png';
    }
    return '';
  }
}
