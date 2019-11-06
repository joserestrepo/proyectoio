import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primercaractermayuscula'
})
export class PrimercaractermayusculaPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {

    return value[0].toUpperCase() + value.slice(1);
  }

}
