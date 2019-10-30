import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Category, getPathOfCategory, HistoryNote, Note } from '../../core/model';
import { FacadeService } from '../../core/service/facade.service';

@Component({
  selector: 'app-consult-note',
  templateUrl: './consult-note.component.html',
  styleUrls: ['./consult-note.component.css']
})
export class ConsultNoteComponent implements OnInit {

  note: Note;
  historyNotes: HistoryNote[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private facadeService: FacadeService
  ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.facadeService.noteService.getNote(id).subscribe(note => {
      this.note = note;
    });

    this.facadeService.historyNoteService.historyNotesListByNote(id).subscribe(historyNotes => {
      this.historyNotes = historyNotes;
    });
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }

  backView() {
    this.location.back();
  }
}
