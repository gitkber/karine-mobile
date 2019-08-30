import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryIconComponent } from './component/category-icon/category-icon.component';
import { CardAccordionComponent } from './component/card-accordion/card-accordion.component';

@NgModule({
  declarations: [CategoryIconComponent, CardAccordionComponent],
  exports: [
    CategoryIconComponent,
    CardAccordionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}
