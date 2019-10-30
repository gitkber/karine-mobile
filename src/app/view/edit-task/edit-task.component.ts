import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DateToStringPipe } from '../../shared/pipe/date-to-string.pipe';
import { Category, Repeat, Note } from '../../core/model';
import { NoteService } from '../../core/service/note.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  note: Note;

  formGroup: FormGroup;
  isNewTask: boolean;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private dateToStringPipe: DateToStringPipe
  ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.isNewTask = id === '0';
    if (this.isNewTask) {
      this.note = new Note();
      this.initFormGroup();
    } else {
      this.noteService.getNote(id).subscribe(note => {
        this.note = note;
        this.initFormGroup();
      });
    }
  }

  private initFormGroup() {
    this.formGroup = this.formBuilder.group({
      key: [this.note.key],
      description: [this.note.description, Validators.required],
      category: [this.note.category, Validators.required],
      repeat: [this.note.repeat, Validators.required],
      extraRepeat: [this.note.extraRepeat],
      amount: [this.note.amount]
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
    this.note.description = this.formGroup.controls.description.value;
    this.note.category = this.formGroup.controls.category.value;
    this.note.repeat = this.formGroup.controls.repeat.value;
    this.note.extraRepeat = this.formGroup.controls.extraRepeat.value;
    this.note.nextRepeat = this.dateToStringPipe.transform(new Date());
    this.note.amount = this.formGroup.controls.amount.value;

    if (this.isNewTask) {
      this.noteService.createNote(this.note);
    } else {
      this.noteService
        .updateNote(this.note.key, {
          description: this.note.description,
          category: this.note.category,
          repeat: this.note.repeat,
          extraRepeat: this.note.extraRepeat,
          amount: this.note.amount
        })
        .catch(err => console.log(err));
    }
    this.location.back();
  }

  backView() {
    this.location.back();
  }
}
