import { Component, OnInit } from '@angular/core';
import { Note } from '../../core/model';
import { FacadeService } from '../../core/service/facade.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  notes: Note[];
  notesSize: number;

  constructor(private facadeService: FacadeService) { }

  ngOnInit() {
    this.facadeService.noteService.taskList().subscribe(notes => {
      this.notes = notes;
      this.notesSize = notes.length;
    });
  }

}
