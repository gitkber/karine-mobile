import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TodayNotesComponent } from './today-notes/today-notes.component';
import { ToComeUpNotesComponent } from './to-come-up-notes/to-come-up-notes.component';
import { DoneNotesComponent } from './done-notes/done-notes.component';
import { ConsultNoteComponent } from './consult-note/consult-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { ViewRoutingModule } from './view-routing.module';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  declarations: [
    TodayNotesComponent,
    ToComeUpNotesComponent,
    DoneNotesComponent,
    ConsultNoteComponent,
    EditNoteComponent,
    BudgetComponent
  ],
  exports: [
    TodayNotesComponent,
    ToComeUpNotesComponent,
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
