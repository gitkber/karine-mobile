import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DateToStringPipe } from '../../shared/pipe/date-to-string.pipe';
import { Note } from '../model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private dbPathNotes = '/notes';

  todayNotesRef: AngularFireList<Note> = null;
  toComeUpNotesRef: AngularFireList<Note> = null;
  budgetNotesRef: AngularFireList<Note> = null;
  notesRef: AngularFireList<Note> = null;

  constructor(private db: AngularFireDatabase, private dateToStringPipe: DateToStringPipe) {
    const today: Date = new Date();
    today.setHours(23, 59, 59);

    this.todayNotesRef = this.db.list(this.dbPathNotes, ref => {
      return ref.orderByChild('nextRepeat').endAt(this.dateToStringPipe.transform(today));
    });
    this.toComeUpNotesRef = this.db.list(this.dbPathNotes, ref => {
      return ref.orderByChild('nextRepeat').startAt(this.dateToStringPipe.transform(today));
    });
    this.budgetNotesRef = this.db.list(this.dbPathNotes, ref => {
      return ref.orderByChild('amount').startAt(0);
    });

    this.notesRef = db.list(this.dbPathNotes);
  }

  todayNoteList(): Observable<Note[]> {
    return this.todayNotesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  toComeUpList(): Observable<Note[]> {
    return this.toComeUpNotesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  budgetList(): Observable<Note[]> {
    return this.budgetNotesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  getNote(key: string): Observable<Note> {
    const ref: AngularFireObject<Note> = this.db.object(this.dbPathNotes + `/${key}`);
    return ref.snapshotChanges().pipe(
      map(c => ({key: c.payload.key, ...c.payload.val()}))
    );
  }

  createNote(note: Note): void {
    this.notesRef.push(note);
  }

  updateNote(key: string, value: any): Promise<void> {
    return this.notesRef.update(key, value);
  }

  deleteNote(key: string): Promise<void> {
    return this.notesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.notesRef.remove();
  }

}
