import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateToStringPipe } from '../../shared/pipe/date-to-string.pipe';
import { Category, Repeat, Task } from '../../core/model';
import { TaskService } from '../../core/service/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  task: Task;

  formGroup: FormGroup;
  isNewTask: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private dateToStringPipe: DateToStringPipe
  ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.isNewTask = id === '0';
    if (this.isNewTask) {
      this.task = new Task();
      this.initFormGroup();
    } else {
      this.taskService.getTask(id).subscribe(task => {
        this.task = task;
        this.initFormGroup();
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
    this.task.nextRepeat = this.dateToStringPipe.transform(new Date());

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
