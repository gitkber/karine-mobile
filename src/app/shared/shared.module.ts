import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryIconComponent } from './component/category-icon/category-icon.component';
import { CardAccordionComponent } from './component/card-accordion/card-accordion.component';
import { DateToStringPipe } from './pipe/date-to-string.pipe';
import { StringToDatePipe } from './pipe/string-to-date.pipe';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

@NgModule({
  declarations: [CategoryIconComponent, CardAccordionComponent, DateToStringPipe, StringToDatePipe, ToolbarComponent],
  exports: [
    CategoryIconComponent,
    CardAccordionComponent,
    StringToDatePipe,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [DateToStringPipe, StringToDatePipe]
})
export class SharedModule {}
