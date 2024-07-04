// Ejemplo de un pipe personalizado para convertir texto a mayúsculas
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TitleUpperCase',
})
export class UpperCasePipe implements PipeTransform {
  transform(title: string): string {
    return title.toUpperCase();
  }
}
