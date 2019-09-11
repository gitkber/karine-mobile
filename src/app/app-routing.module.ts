import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// {path: '**', component: PageNotFoundComponent}];

const routes: Routes = [
  {path: '', redirectTo: 'view/present', pathMatch: 'full'},
  { // lazy loading
    path: 'view',
    loadChildren: './view/view.module#ViewModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
