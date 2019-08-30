import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { RouterModule } from '@angular/router';

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
    RouterModule
  ]
})
export class CoreModule {}
