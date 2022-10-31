import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'showError'
})
export class ShowErrorPipe implements PipeTransform {

  transform(value: ValidationErrors, unit: string): unknown {
    if (unit == 'to-string') {
      return value['error'];
    }
    return null;
  }

}
