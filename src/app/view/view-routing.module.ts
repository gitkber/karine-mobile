import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodayNotesComponent } from './today-notes/today-notes.component';
import { DoneNotesComponent } from './done-notes/done-notes.component';
import { ConsultNoteComponent } from './consult-note/consult-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { BudgetComponent } from './budget/budget.component';

const routes: Routes = [
  {path: 'today-notes', component: TodayNotesComponent, data: {animation: 'Present'}},
  {path: 'done-notes', component: DoneNotesComponent, data: {animation: 'Past'}},
  {path: 'consultNote/:id', component: ConsultNoteComponent, data: {animation: 'Consult'}},
  {path: 'editNote/:id', component: EditNoteComponent, data: {animation: 'Edit'}},
  {path: 'budget', component: BudgetComponent, data: {animation: 'Consult'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {}
