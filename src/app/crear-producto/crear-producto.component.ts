import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  @Input() productDetails = { nombre: '', descripcion: '', stock: 0 };
  constructor(private productoS : ProductoService, private router : Router) {}

  ngOnInit() {}
  
    agregarProducto(dataProduct: any) {
    this.productoS.createProduct(this.productDetails).subscribe((data: {}) => {
      this.router.navigate(['/listar-productos']);
    });
  }
}
