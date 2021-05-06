import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  //necessita colocar o componente no export para que seja visivel em outro módulo
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
