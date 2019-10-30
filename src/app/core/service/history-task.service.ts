import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HistoryNote, Repeat, Note } from '../model';
import { DateToStringPipe } from '../../shared/pipe/date-to-string.pipe';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryTaskService {

  private dbPathHistory = '/historyTasks';

  private historyRef: AngularFireList<HistoryNote> = null;

  constructor(private db: AngularFireDatabase, private dateToStringPipe: DateToStringPipe) {
    this.historyRef = db.list(this.dbPathHistory);
  }

  historyTasksListByTask(taskKey: string): Observable<HistoryNote[]> {
    return this.snapshotChangesMap(this.db.list(this.dbPathHistory, query => {
      return query.orderByChild('taskKey').equalTo(taskKey);
    }));
  }

  doneHistoryTasksList(): Observable<HistoryNote[]> {
    return this.snapshotChangesMap(this.db.list(this.dbPathHistory, query => {
      return query.orderByChild('done').equalTo(true);
    }));
  }

  private snapshotChangesMap(angularFireList: AngularFireList<HistoryNote>): Observable<HistoryNote[]> {
    return angularFireList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    );
  }

  createHistoryTask(task: Note, done: boolean) {
    const ht: HistoryNote = new HistoryNote();
    ht.taskKey = task.key;
    ht.description = task.description;
    ht.category = task.category;
    ht.done = done;
    ht.hDate = this.dateToStringPipe.transform(new Date());
    this.historyRef.push(ht);
  }

}
