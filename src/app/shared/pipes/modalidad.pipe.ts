import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modalidad'
})
export class ModalidadPipe implements PipeTransform {

  transform(value: string): string {
    if (value === "P")
      return "Presencial";
    if (value === "S")
      return "Semipresencial";
    if (value === "D")
      return "Dual";
    if (value === "E")
      return "En linea";
    if (value === "A")
      return "A distancia";
  }
}
