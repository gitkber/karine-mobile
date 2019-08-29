import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryIconComponent } from './component/category-icon/category-icon.component';

@NgModule({
  declarations: [CategoryIconComponent],
  exports: [
    CategoryIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}
