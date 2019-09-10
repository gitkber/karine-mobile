import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToDate'
})
export class StringToDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === undefined) {
      return value;
    }
    return new Date(value);
  }

}
