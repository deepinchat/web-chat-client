import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subString'
})
export class SubStringPipe implements PipeTransform {

  transform(text: string, maxLength = 100): any {
    if (!text || text.length <= maxLength) return text;
    return text.substring(0, maxLength);
  }

}
