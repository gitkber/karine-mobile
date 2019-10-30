import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PresentComponent } from './present/present.component';
import { FutureComponent } from './future/future.component';
import { PastComponent } from './past/past.component';
import { ConsultNoteComponent } from './consult-note/consult-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { ViewRoutingModule } from './view-routing.module';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  declarations: [
    PresentComponent,
    FutureComponent,
    PastComponent,
    ConsultNoteComponent,
    EditNoteComponent,
    BudgetComponent
  ],
  exports: [
    PresentComponent,
    FutureComponent,
    PastComponent,
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
