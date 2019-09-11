import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PresentComponent } from './view/present/present.component';
import { FutureComponent } from './view/future/future.component';
import { PastComponent } from './view/past/past.component';
import { ConsultTaskComponent } from './view/consult-task/consult-task.component';
import { EditTaskComponent } from './view/edit-task/edit-task.component';

@NgModule({
  declarations: [
    PresentComponent,
    FutureComponent,
    PastComponent,
    ConsultTaskComponent,
    EditTaskComponent
  ],
  exports: [
    PresentComponent,
    FutureComponent,
    PastComponent,
    ConsultTaskComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CoreModule {}
