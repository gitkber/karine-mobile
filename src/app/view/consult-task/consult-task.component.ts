import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Category, getPathOfCategory, HistoryTask, Task } from '../../core/tasks/task';
import { TaskService } from '../../core/tasks/task.service';

@Component({
  selector: 'app-consult-task',
  templateUrl: './consult-task.component.html',
  styleUrls: ['./consult-task.component.css']
})
export class ConsultTaskComponent implements OnInit {

  task: Task;
  historyTasks: HistoryTask[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).snapshotChanges().pipe(
      map(c => ({key: c.payload.key, ...c.payload.val()}))
    ).subscribe(task => {
      this.task = task;
    });

    this.taskService.getHistoryTasksList(id).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    ).subscribe(historyTasks => {
      this.historyTasks = historyTasks;
    });
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }

  editTask(eeee) {
    console.log(this.task.key + '        - ' + eeee);
  }
}
