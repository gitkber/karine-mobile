import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentComponent } from './present/present.component';
import { PastComponent } from './past/past.component';
import { FutureComponent } from './future/future.component';
import { ConsultTaskComponent } from './consult-task/consult-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  {path: 'present', component: PresentComponent},
  {path: 'past', component: PastComponent},
  {path: 'future', component: FutureComponent},
  {path: 'consultTask/:id', component: ConsultTaskComponent},
  {path: 'editTask/:id', component: EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {}
