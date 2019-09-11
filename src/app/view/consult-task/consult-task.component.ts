import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, getPathOfCategory, HistoryTask, Task } from '../../core/model';
import { FacadeService } from '../../core/service/facade.service';

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
    private facadeService: FacadeService
  ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.facadeService.taskService.getTask(id).subscribe(task => {
      this.task = task;
    });

    this.facadeService.historyTaskService.getHistoryTasksList(id).subscribe(historyTasks => {
      this.historyTasks = historyTasks;
    });
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }

}
