import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinusculaPipe } from './minuscula.pipe';



@NgModule({
  declarations: [
    MinusculaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinusculaPipe
  ]
})
export class MinusculaModule { }
