import { Injectable } from '@angular/core';
import { TaskService } from './task.service';
import { HistoryTaskService } from './history-task.service';
import { DateToStringPipe } from '../../shared/pipe/date-to-string.pipe';
import { Repeat, Task } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(
    public taskService: TaskService,
    public historyTaskService: HistoryTaskService,
    private dateToStringPipe: DateToStringPipe
  ) { }

  acceptTask(task: Task) {
    // Add task in the history
    this.historyTaskService.createHistoryTask(task);

    // Save nextDate
    const nextDate: Date = this.calculateNextDate(new Date(), task.repeat, task.extraRepeat);
    if (nextDate === null) {
      // remove task
      // this.deleteTask(task.key).catch(err => console.log(err));
    } else {
      // save next date
      // task.nextRepeat = this.dateToStringPipe.transform(new Date());
      task.nextRepeat = this.dateToStringPipe.transform(nextDate);
      this.taskService.updateTask(task.key, {nextRepeat: task.nextRepeat}).catch(err => console.log(err));
    }
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
