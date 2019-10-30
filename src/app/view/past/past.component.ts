import { Component, OnInit } from '@angular/core';
import { HistoryNoteService } from '../../core/service/history-note.service';
import { Category, getPathOfCategory, HistoryNote } from '../../core/model';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {

  historyNotes: HistoryNote[];

  constructor(private historyNoteService: HistoryNoteService) { }

  ngOnInit() {
    this.historyNoteService.doneHistoryNotesList().subscribe(historyTasks => {
      this.historyNotes = historyTasks;
    });
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }
}
