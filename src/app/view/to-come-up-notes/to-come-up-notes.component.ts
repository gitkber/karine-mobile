import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, getPathOfCategory, Note } from '../../core/model';
import { NoteService } from '../../core/service/note.service';

@Component({
  selector: 'app-to-come-up-notes',
  templateUrl: './to-come-up-notes.component.html',
  styleUrls: ['./to-come-up-notes.component.css']
})
export class ToComeUpNotesComponent implements OnInit {

  today: Date = new Date();
  notes: Note[];

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() {
    this.noteService.toComeUpList().subscribe(notes => {
      this.notes = notes;
    });
  }

  consultNote(note: Note) {
    this.router.navigate(['/consultNote', note.key]);
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }
}
