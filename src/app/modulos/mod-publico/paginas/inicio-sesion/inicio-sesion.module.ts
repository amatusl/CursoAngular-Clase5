import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/directives/directives.module'
import { MinusculaModule } from 'src/app/pipes/minuscula/minuscula.module'


@NgModule({
  declarations: [
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    MinusculaModule,
    RouterModule.forChild([
      { path: '', component: InicioSesionComponent }
    ])
  ]
})
export class InicioSesionModule { }
