import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentComponent } from './present/present.component';
import { PastComponent } from './past/past.component';
import { FutureComponent } from './future/future.component';
import { ConsultNoteComponent } from './consult-note/consult-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { BudgetComponent } from './budget/budget.component';

const routes: Routes = [
  {path: 'present', component: PresentComponent, data: {animation: 'Present'}},
  {path: 'past', component: PastComponent, data: {animation: 'Past'}},
  {path: 'future', component: FutureComponent},
  {path: 'consultNote/:id', component: ConsultNoteComponent, data: {animation: 'Consult'}},
  {path: 'editNote/:id', component: EditNoteComponent, data: {animation: 'Edit'}},
  {path: 'budget', component: BudgetComponent, data: {animation: 'Consult'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {}
