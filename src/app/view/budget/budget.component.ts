import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../core/service/facade.service';
import { Category, getPathOfCategory, Task } from '../../core/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  tasks: Task[];
  tasksSize: number;

  constructor(private facadeService: FacadeService, private router: Router) { }

  ngOnInit() {
    this.facadeService.taskService.budgetList().subscribe(tasks => {
      this.tasks = tasks;
      this.tasksSize = tasks.length;
    });
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }

  consultTask(task: Task) {
    this.router.navigate(['/consultTask', task.key]);
  }

}
