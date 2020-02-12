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

  private dbPathHistory = '/historyNotes';

  private historyRef: AngularFireList<HistoryNote> = null;

  constructor(private db: AngularFireDatabase, private dateToStringPipe: DateToStringPipe) {
    this.historyRef = db.list(this.dbPathHistory);
  }

  historyNotesListByNote(noteKey: string): Observable<HistoryNote[]> {
    return this.snapshotChangesMap(this.db.list(this.dbPathHistory, query => {
      return query.orderByChild('noteKey').equalTo(noteKey);
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
    historyNote.noteKey = note.key;
    historyNote.description = note.description;
    historyNote.category = note.category;
    historyNote.tagList = note.tagList;
    historyNote.done = done;
    historyNote.hDate = this.dateToStringPipe.transform(new Date());
    this.historyRef.push(historyNote);
  }

}
