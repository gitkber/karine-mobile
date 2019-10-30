import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HistoryNote, Note } from '../model';
import { DateToStringPipe } from '../../shared/pipe/date-to-string.pipe';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryNoteService {

  private dbPathHistory = '/historyTasks';

  private historyRef: AngularFireList<HistoryNote> = null;

  constructor(private db: AngularFireDatabase, private dateToStringPipe: DateToStringPipe) {
    this.historyRef = db.list(this.dbPathHistory);
  }

  historyNotesListByTask(taskKey: string): Observable<HistoryNote[]> {
    return this.snapshotChangesMap(this.db.list(this.dbPathHistory, query => {
      return query.orderByChild('taskKey').equalTo(taskKey);
    }));
  }

  doneHistoryNotesList(): Observable<HistoryNote[]> {
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

  createHistoryNote(note: Note, done: boolean) {
    const historyNote: HistoryNote = new HistoryNote();
    historyNote.taskKey = note.key;
    historyNote.description = note.description;
    historyNote.category = note.category;
    historyNote.done = done;
    historyNote.hDate = this.dateToStringPipe.transform(new Date());
    this.historyRef.push(historyNote);
  }

}
