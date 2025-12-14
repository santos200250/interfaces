import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadotexto',
  standalone: false,
})
export class EstadoTextoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? 'Activo' : 'Inactivo';
  }

}
