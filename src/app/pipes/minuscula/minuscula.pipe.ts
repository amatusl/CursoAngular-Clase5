
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuscula'
})
export class MinusculaPipe implements PipeTransform {

  /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

  transform(minuscula: string): string {
    return minuscula.toLowerCase()
  }
}
