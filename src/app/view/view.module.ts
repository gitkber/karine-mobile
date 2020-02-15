import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ViewRoutingModule } from './view-routing.module';

import { TodayNotesComponent } from './today-notes/today-notes.component';
import { DoneNotesComponent } from './done-notes/done-notes.component';
import { ConsultNoteComponent } from './consult-note/consult-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { TaskComponent } from './task/task.component';
import { BudgetComponent } from './budget/budget.component';
import { BudgetMonthComponent } from './budget-month/budget-month.component';

@NgModule({
  declarations: [
    TodayNotesComponent,
    DoneNotesComponent,
    ConsultNoteComponent,
    EditNoteComponent,
    BudgetComponent,
    NoteListComponent,
    TaskComponent,
    BudgetMonthComponent
  ],
  exports: [
    TodayNotesComponent,
    DoneNotesComponent,
    ConsultNoteComponent,
    EditNoteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewRoutingModule,
    ReactiveFormsModule
  ]
})
export class ViewModule {}
