import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase'
})

export class UppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
