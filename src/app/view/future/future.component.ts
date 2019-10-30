import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, getPathOfCategory, Note } from '../../core/model';
import { NoteService } from '../../core/service/note.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  today: Date = new Date();
  notes: Note[];

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() {
    this.noteService.futureList().subscribe(tasks => {
      this.notes = tasks;
    });
  }

  consultTask(task: Note) {
    this.router.navigate(['/consultTask', task.key]);
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }
}
