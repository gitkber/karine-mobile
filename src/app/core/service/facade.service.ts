import { Injectable } from '@angular/core';
import { NoteService } from './note.service';
import { HistoryNoteService } from './history-note.service';
import { DateToStringPipe } from '../../shared/pipe/date-to-string.pipe';
import { Budget, Category, Note, Repeat } from '../model';
import { BudgetService } from './budget.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(
    public noteService: NoteService,
    public historyNoteService: HistoryNoteService,
    public budgetService: BudgetService,
    private dateToStringPipe: DateToStringPipe
  ) { }

  acceptNote(note: Note) {
    const nextDate: Date = this.calculateNextDate(new Date(), note.repeat, note.extraRepeat);

    this.historyNoteService.createHistoryNote(note, nextDate == null);

    if (note.category === Category.BUDGET) {
      this.budgetService.createBudget(this.createBudget(note));
    }

    if (nextDate === null) {
      // remove note
      this.noteService.deleteNote(note.key).catch(err => console.log(err));
    } else {
      // save next date
      note.nextRepeat = this.dateToStringPipe.transform(nextDate);
      this.noteService.updateNote(note.key, {nextRepeat: note.nextRepeat}).catch(err => console.log(err));
    }
  }

  private calculateNextDate(today: Date, repeat: Repeat, extraRepeat: string): Date {
    switch (repeat) {
      case Repeat.ONCE:
        return null;
      case Repeat.ALL_DAY:
        today.setDate(today.getDate() + 1);
        return today;
      case Repeat.ONE_BY_WEEK:
        today.setDate(today.getDate() + 7);
        return today;
      case Repeat.ONE_BY_MONTH:
        today.setMonth(today.getMonth() + 1);
        return today;
      case Repeat.ONE_BY_YEAR:
        today.setFullYear(today.getFullYear() + 1);
        return today;
      case Repeat.EVERY_X_DAYS:
        today.setDate(today.getDate() + +extraRepeat);
        return today;
      case Repeat.EVERY_X_MONTH:
        today.setMonth(today.getMonth() + +extraRepeat);
        return today;
      case Repeat.EVERY_X_YEAR:
        today.setFullYear(today.getFullYear() + +extraRepeat);
        return today;
    }
  }

  private createBudget(note: Note): Budget {
    const today: Date = new Date();
    const budget: Budget = new Budget();
    budget.month = today.getMonth();
    budget.year = today.getFullYear();
    budget.day = today.getDay();
    budget.description = note.description;
    budget.amount = note.amount;
    budget.tag = note.tagList[0];
    return budget;
  }
}
