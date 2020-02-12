import { Component, Input, OnInit } from '@angular/core';
import { getPathOfFirstTag, Note, Tag } from '../../core/model';
import { Router } from '@angular/router';
import { FacadeService } from '../../core/service/facade.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input() notes: Note[];

  constructor(private router: Router, private facadeService: FacadeService) { }

  ngOnInit() {
  }

  getPath(tagList: Tag[]) {
    return getPathOfFirstTag(tagList);
  }

  consultNote(note: Note) {
    this.router.navigate(['/consultNote', note.key]);
  }

  acceptNote(note: Note) {
    this.facadeService.acceptNote(note);
  }
}
