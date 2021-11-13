import { MinusculaPipe } from './../../pipes/minuscula/minuscula.pipe';

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[TextoMinuscula]'
})
export class TextoMinusculaDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:keyup', ['$event'])
  keyUp($event: any) {
    /* console.log('key.up', $event.key, $event.target.value); */
    const TextoAnterior = $event.target.value;
    const TextoNuevo = (new MinusculaPipe()).transform(TextoAnterior);
    /* console.log('rutNuevo', TextoNuevo); */
    this.elementRef.nativeElement.value = TextoNuevo;
  }

}
