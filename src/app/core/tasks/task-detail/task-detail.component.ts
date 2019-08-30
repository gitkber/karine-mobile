import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task;

  formGroup: FormGroup;
  submitted = false;
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
    }
  }

  initFormGroup() {
    this.formGroup = this.formBuilder.group({
      key: [this.task.key],
      description: [this.task.description, Validators.required]
    });
  }

  // deleteMovie() {
  //   this.moviesService.deleteMovie(this.movie.id).subscribe(() => this.router.navigate(['/movies']));
  // }

  newTask(): void {
    this.submitted = false;
    this.task = new Task();
  }

  onSubmit() {
    this.submitted = true;

    this.task.description = this.formGroup.controls.description.value;

    if (this.isNewTask) {
      this.taskService.createTask(this.task);
    } else {
      this.taskService
        .updateTask(this.task.key, {description: this.task.description})
        .catch(err => console.log(err));
    }
    this.router.navigate(['/']);
  }

}
