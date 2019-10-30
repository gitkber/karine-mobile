import { Component, OnInit } from '@angular/core';
import { HistoryTaskService } from '../../core/service/history-task.service';
import { Category, getPathOfCategory, HistoryNote } from '../../core/model';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {

  historyTasks: HistoryNote[];

  constructor(private historyTaskService: HistoryTaskService) { }

  ngOnInit() {
    this.historyTaskService.doneHistoryTasksList().subscribe(historyTasks => {
      this.historyTasks = historyTasks;
    });
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }
}
