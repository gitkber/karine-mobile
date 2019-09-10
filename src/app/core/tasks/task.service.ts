import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { HistoryTask, Repeat, Task } from './task';
import { DateToStringPipe } from '../../shared/pipe/date-to-string.pipe';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private dbPathTasks = '/tasks';
  private dbPathHistory = '/historyTasks';

  tasksRef: AngularFireList<Task> = null;
  historyRef: AngularFireList<HistoryTask> = null;

  constructor(private db: AngularFireDatabase, private dateToStringPipe: DateToStringPipe) {
    this.tasksRef = db.list(this.dbPathTasks);
    this.historyRef = db.list(this.dbPathHistory);
  }

  getTasksList(): AngularFireList<Task> {
    return this.tasksRef;
  }

  getHistoryTasksList(taskKey: string): AngularFireList<HistoryTask> {
    return this.db.list(this.dbPathHistory, ref => {
      return ref.orderByChild('taskKey').equalTo(taskKey);
    });
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

  getTask(key: string): AngularFireObject<Task> {
    return this.db.object(this.dbPathTasks + `/${key}`);
  }

  acceptTask(task: Task) {
    // Add task in the history
    this.createHistoryTask(task);

    // Save nextDate
    const nextDate: Date = this.calculateNextDate(new Date(), task.repeat, task.extraRepeat);
    if (nextDate === null) {
      // remove task
      this.deleteTask(task.key).catch(err => console.log(err));
    } else {
      // save next date
      task.nextRepeat = this.dateToStringPipe.transform(nextDate);
      this.updateTask(task.key, {nextRepeat: task.nextRepeat}).catch(err => console.log(err));
    }
  }

  private createHistoryTask(task: Task) {
    const ht: HistoryTask = new HistoryTask();
    ht.taskKey = task.key;
    ht.description = task.description;
    ht.category = task.category;
    ht.hDate = this.dateToStringPipe.transform(new Date());
    this.historyRef.push(ht);
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

}
