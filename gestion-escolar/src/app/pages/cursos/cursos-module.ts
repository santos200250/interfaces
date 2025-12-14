import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing-module';
import { CursosComponent } from './cursos/cursos.component';
import { EstadoTextoPipe } from '../../shared/pipes/estado.pipe';

@NgModule({
  declarations: [
    CursosComponent,
    EstadoTextoPipe
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }