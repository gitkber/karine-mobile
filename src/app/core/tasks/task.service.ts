import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private dbPath = '/tasks';

  tasksRef: AngularFireList<Task> = null;

  constructor(private db: AngularFireDatabase) {
    this.tasksRef = db.list(this.dbPath);
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

  getTasksList(): AngularFireList<Task> {
    return this.tasksRef;
  }

  deleteAll(): Promise<void> {
    return this.tasksRef.remove();
  }
}
