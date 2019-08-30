import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
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

  getTasksList(): AngularFireList<Task> {
    return this.tasksRef;
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
    return this.db.object(this.dbPath + `/${key}`);
  }
}
