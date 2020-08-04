import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estatus'
})
export class EstatusPipe implements PipeTransform {

  transform(value: string): string {
    if (value === "V")
      return "Vigente";
    if (value === "N")
      return "No vigente";
    if (value === "E")
      return "En Proceso";
  }

}
