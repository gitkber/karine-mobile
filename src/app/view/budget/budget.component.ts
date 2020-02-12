import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../core/service/facade.service';
import { Note } from '../../core/model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  notes: Note[];
  notesSize: number;

  constructor(private facadeService: FacadeService) { }

  ngOnInit() {
    this.facadeService.noteService.budgetList().subscribe(notes => {
      this.notes = notes;
      this.notesSize = notes.length;
    });
  }

}
