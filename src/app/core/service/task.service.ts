import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DateToStringPipe } from '../../shared/pipe/date-to-string.pipe';
import { Task } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private dbPathTasks = '/tasks';

  presentTasksRef: AngularFireList<Task> = null;
  futureTasksRef: AngularFireList<Task> = null;
  tasksRef: AngularFireList<Task> = null;

  constructor(private db: AngularFireDatabase, private dateToStringPipe: DateToStringPipe) {
    const today: Date = new Date();
    today.setHours(23, 59, 59);

    this.presentTasksRef = this.db.list(this.dbPathTasks, ref => {
      return ref.orderByChild('nextRepeat').endAt(this.dateToStringPipe.transform(today));
    });
    this.futureTasksRef = this.db.list(this.dbPathTasks, ref => {
      return ref.orderByChild('nextRepeat').startAt(this.dateToStringPipe.transform(today));
    });

    this.tasksRef = db.list(this.dbPathTasks);
  }

  presentList(): Observable<Task[]> {
    return this.presentTasksRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  futureList(): Observable<Task[]> {
    return this.futureTasksRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  getTask(key: string): Observable<Task> {
    const ref: AngularFireObject<Task> = this.db.object(this.dbPathTasks + `/${key}`);
    return ref.snapshotChanges().pipe(
      map(c => ({key: c.payload.key, ...c.payload.val()}))
    );
  }

  createTask(task: Task): void {
    this.tasksRef.push(task);
  }

  updateTask(key: string, value: any): Promise<void> {
    return this.tasksRef.update(key, value);
  }

  deleteTask(key: string): Promise<void> {
    return this.tasksRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tasksRef.remove();
  }

}
