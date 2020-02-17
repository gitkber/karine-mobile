import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DateToStringPipe } from '../../shared/pipe/date-to-string.pipe';
import { Budget } from '../model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budgetRef: AngularFireList<Budget> = null;

  private dbPathNotes = '/budget';

  constructor(private db: AngularFireDatabase) {


    this.budgetRef = this.db.list(this.dbPathNotes);
  }

  budgetList(year: number, month: number): Observable<Budget[]> {
    return this.budgetRef.snapshotChanges().pipe(
      map(changes =>
        changes
          .map(c => ({key: c.payload.key, ...c.payload.val()}))
          .filter(e => e.year === year && e.month === month)
      )
    );
  }

  createBudget(note: Budget): void {
    this.budgetRef.push(note);
  }

}
