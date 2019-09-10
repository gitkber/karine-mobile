import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Category, Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  editTaskList: boolean = false;
  tasks: Task[];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    // this.taskService.getTasksList().snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({key: c.payload.key, ...c.payload.val()})
    //     )
    //   )
    // ).subscribe(tasks => {
    //   this.tasks = tasks;
    // });
  }

  tasksInNow() {
    // this.taskService.getTasksList().snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({key: c.payload.key, ...c.payload.val()})
    //     )
    //   )
    // ).subscribe(tasks => {
    //   this.tasks = tasks;
    // });
  }

  tasksInFuture() {
    // this.taskService.getTasksInFutureList().snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({key: c.payload.key, ...c.payload.val()})
    //     )
    //   )
    // ).subscribe(tasks => {
    //   this.tasks = tasks;
    // });
  }


  editTask(task: Task) {
    this.router.navigate(['/taskDetail', task.key]);
    console.log('edit the task ' + task.key);
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

  changeModeTask() {
    this.editTaskList = !this.editTaskList;
  }

  acceptTask(task: Task) {
    console.log('accept the task ' + task.key);
    this.taskService.acceptTask(task);
  }

}
