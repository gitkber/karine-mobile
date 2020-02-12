import { Component, OnInit } from '@angular/core';
import { HistoryNoteService } from '../../core/service/history-note.service';
import { Category, getPathOfCategory, getPathOfFirstTag, HistoryNote, Tag } from '../../core/model';

@Component({
  selector: 'app-done-notes',
  templateUrl: './done-notes.component.html',
  styleUrls: ['./done-notes.component.css']
})
export class DoneNotesComponent implements OnInit {

  historyNotes: HistoryNote[];

  constructor(private historyNoteService: HistoryNoteService) { }

  ngOnInit() {
    this.historyNoteService.doneHistoryNotesList().subscribe(historyNotes => {
      this.historyNotes = historyNotes;
    });
  }

  getPath(tagList: Tag[]) {
    return getPathOfFirstTag(tagList);
  }
}
