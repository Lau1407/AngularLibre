
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  productData: any=[];
  categoria:any=[];

  constructor(
    public productoS: ProductoService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
   this.cargarCategorias()
   this.actualizarProd();

  }

  actualizarProd(){
    this.productoS.getProduct(this.id).subscribe((data: {}) => {
      this.productData = data;
    })
  }

  cargarCategorias(){
    return this.productoS.getCategory().subscribe((data: {}) => {
      this.categoria = data;
    });
  }


  updateProduct() {
    if(window.confirm('Confimar cambios?')){
      this.productoS.actualizarProducto(this.id, this.productData, this.categoria).subscribe(data => {
        this.router.navigate(['/listar-productos'])
      })
    }
  }


}
