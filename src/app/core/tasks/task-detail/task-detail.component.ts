import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, HistoryTask, Repeat, Task } from '../task';
import { TaskService } from '../task.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task;
  historyTasks: HistoryTask[];

  formGroup: FormGroup;
  isNewTask: boolean;

  constructor(private route: ActivatedRoute, private taskService: TaskService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.isNewTask = id === '0';
    if (this.isNewTask) {
      this.task = new Task();
      this.initFormGroup();
    } else {
      this.taskService.getTask(id).snapshotChanges().pipe(
        map(c => ({key: c.payload.key, ...c.payload.val()}))
      ).subscribe(task => {
        this.task = task;
        this.initFormGroup();
      });

      this.taskService.getHistoryTasksList(id).snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({key: c.payload.key, ...c.payload.val()})
          )
        )
      ).subscribe(historyTasks => {
        this.historyTasks = historyTasks;
      });
    }

  }

  private initFormGroup() {
    this.formGroup = this.formBuilder.group({
      key: [this.task.key],
      description: [this.task.description, Validators.required],
      category: [this.task.category, Validators.required],
      repeat: [this.task.repeat, Validators.required],
      extraRepeat: [this.task.extraRepeat]
    });
  }

  allCategory() {
    return Object.keys(Category);
  }

  allRepeat() {
    return Object.keys(Repeat);
  }

  // deleteMovie() {
  //   this.moviesService.deleteMovie(this.movie.id).subscribe(() => this.router.navigate(['/movies']));
  // }

  onSubmit() {
    this.task.description = this.formGroup.controls.description.value;
    this.task.category = this.formGroup.controls.category.value;
    this.task.repeat = this.formGroup.controls.repeat.value;
    this.task.extraRepeat = this.formGroup.controls.extraRepeat.value;

    if (this.isNewTask) {
      this.taskService.createTask(this.task);
    } else {
      this.taskService
        .updateTask(this.task.key, {
          description: this.task.description,
          category: this.task.category,
          repeat: this.task.repeat,
          extraRepeat: this.task.extraRepeat
        })
        .catch(err => console.log(err));
    }
    this.router.navigate(['/']);
  }

}
