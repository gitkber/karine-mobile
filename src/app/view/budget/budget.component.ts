import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../core/service/facade.service';
import { Category, getPathOfCategory, Note } from '../../core/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  notes: Note[];
  notesSize: number;

  constructor(private facadeService: FacadeService, private router: Router) { }

  ngOnInit() {
    this.facadeService.noteService.budgetList().subscribe(notes => {
      this.notes = notes;
      this.notesSize = notes.length;
    });
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }

  consultTask(note: Note) {
    this.router.navigate(['/consultTask', note.key]);
  }

}
