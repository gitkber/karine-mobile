import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TaskListComponent
  ],
  exports: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule {}
