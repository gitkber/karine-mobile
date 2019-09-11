import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentComponent } from './view/present/present.component';
import { PastComponent } from './view/past/past.component';
import { FutureComponent } from './view/future/future.component';
import { ConsultTaskComponent } from './view/consult-task/consult-task.component';
import { EditTaskComponent } from './view/edit-task/edit-task.component';

const routes: Routes = [
  {path: '', component: PresentComponent},
  {path: 'past', component: PastComponent},
  {path: 'future', component: FutureComponent},
  {path: 'consultTask/:id', component: ConsultTaskComponent},
  {path: 'editTask/:id', component: EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
