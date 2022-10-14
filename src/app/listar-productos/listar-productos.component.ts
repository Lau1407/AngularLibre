import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  filtro : string = '';

  Producto: any = [];
  constructor(private productoS : ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    return this.productoS.getProducts().subscribe((data: {}) => {
      this.Producto = data;
    });
  }
  


}
