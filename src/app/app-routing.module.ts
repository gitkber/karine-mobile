import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './core/tasks/task-list/task-list.component';
import { TaskDetailComponent } from './core/tasks/task-detail/task-detail.component';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'taskDetail/:id', component: TaskDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
