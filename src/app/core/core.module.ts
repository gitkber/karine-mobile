import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailComponent
  ],
  exports: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CoreModule {}
