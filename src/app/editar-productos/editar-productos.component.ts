
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
  productData: any = {};
  constructor(
    public productoS: ProductoService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.productoS.getProduct(this.id).subscribe((data: {}) => {
      this.productData = data;
    })
  }
  updateProduct() {
    if(window.confirm('.......')){
      this.productoS.updateProduct(this.id, this.productData).subscribe(data => {
        this.router.navigate(['/products-list'])
      })
    }
  }
}
