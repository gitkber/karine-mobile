import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PresentComponent } from './present/present.component';
import { FutureComponent } from './future/future.component';
import { PastComponent } from './past/past.component';
import { ConsultTaskComponent } from './consult-task/consult-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ViewRoutingModule } from './view-routing.module';

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
    ViewRoutingModule,
    ReactiveFormsModule
  ]
})
export class ViewModule {}
