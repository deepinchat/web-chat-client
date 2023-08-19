import { DATE_PIPE_DEFAULT_OPTIONS, DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatDate'
})
export class ChatDatePipe implements PipeTransform {
  constructor(
    private datePipe: DatePipe
  ) {

  }
  transform(value: string | number | Date, args?: any): any {
    const now = new Date();
    const date = new Date(value);
    if (now.getDate() === date.getDate()) {
      DATE_PIPE_DEFAULT_OPTIONS
      return this.datePipe.transform(value, 'h:mma');
    } else if (now.getFullYear() === date.getFullYear()) {
      return this.datePipe.transform(value, 'MM/dd');
    } else {
      return this.datePipe.transform(value, 'MM/dd/YY');
    }
  }

}
