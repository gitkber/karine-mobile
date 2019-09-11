import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HistoryTask, Repeat, Task } from '../model';
import { DateToStringPipe } from '../../shared/pipe/date-to-string.pipe';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryTaskService {

  private dbPathHistory = '/historyTasks';

  private historyRef: AngularFireList<HistoryTask> = null;

  constructor(private db: AngularFireDatabase, private dateToStringPipe: DateToStringPipe) {
    this.historyRef = db.list(this.dbPathHistory);
  }

  historyTasksListByTask(taskKey: string): Observable<HistoryTask[]> {
    return this.snapshotChangesMap(this.db.list(this.dbPathHistory, query => {
      return query.orderByChild('taskKey').equalTo(taskKey);
    }));
  }

  doneHistoryTasksList(): Observable<HistoryTask[]> {
    return this.snapshotChangesMap(this.db.list(this.dbPathHistory, query => {
      return query.orderByChild('done').equalTo(true);
    }));
  }

  private snapshotChangesMap(angularFireList: AngularFireList<HistoryTask>): Observable<HistoryTask[]> {
    return angularFireList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    );
  }

  createHistoryTask(task: Task, done: boolean) {
    const ht: HistoryTask = new HistoryTask();
    ht.taskKey = task.key;
    ht.description = task.description;
    ht.category = task.category;
    ht.done = done;
    ht.hDate = this.dateToStringPipe.transform(new Date());
    this.historyRef.push(ht);
  }

}
