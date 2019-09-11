import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryIconComponent } from './component/category-icon/category-icon.component';
import { CardAccordionComponent } from './component/card-accordion/card-accordion.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { DateToStringPipe } from './pipe/date-to-string.pipe';
import { StringToDatePipe } from './pipe/string-to-date.pipe';

@NgModule({
  declarations: [
    CategoryIconComponent,
    CardAccordionComponent,
    ToolbarComponent,
    DateToStringPipe,
    StringToDatePipe
  ],
  exports: [
    CategoryIconComponent,
    CardAccordionComponent,
    ToolbarComponent,
    DateToStringPipe,
    StringToDatePipe,
  ],
  imports: [
    CommonModule
  ],
  providers: [DateToStringPipe, StringToDatePipe]
})
export class SharedModule {}
