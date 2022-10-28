import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) return value;
    const ResultadoProducto = [];
    for (const producto of value) {
      if (producto.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        ResultadoProducto.push(producto);
      };
      if (producto.Categoria.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        ResultadoProducto.push(producto);
      };
    };
    return ResultadoProducto;
  }


}
