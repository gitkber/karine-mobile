import { Component, OnInit } from '@angular/core';
import { Note } from '../../core/model';
import { FacadeService } from '../../core/service/facade.service';

@Component({
  selector: 'app-budget-month',
  templateUrl: './budget-month.component.html',
  styleUrls: ['./budget-month.component.css']
})
export class BudgetMonthComponent implements OnInit {

  today: Date = new Date();

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
