import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textlimit'
})

export class TextlimitPipe implements PipeTransform {
  transform(value: string, length: number): unknown {
    return value.length > length ? value.substr(0, length) + '...' : value;
  }
}
