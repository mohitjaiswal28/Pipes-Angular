import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatphone'
})

export class FormatphonePipe implements PipeTransform {
  transform(value: string): unknown {
    return value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
}
