import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getPathOfFirstTag, Note, Tag } from '../../core/model';
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

  getPath(tagList: Tag[]) {
    return getPathOfFirstTag(tagList);
  }
}
