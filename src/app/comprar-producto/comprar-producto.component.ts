import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-comprar-producto',
  templateUrl: './comprar-producto.component.html',
  styleUrls: ['./comprar-producto.component.css']
})
export class ComprarProductoComponent implements OnInit {
  productData: any = {};
  id = this.actRoute.snapshot.params['id'];
  
  constructor(public productoS: ProductoService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.productoS.getProduct(this.id).subscribe((data: {}) => {
      this.productData = data;
      
  })
}

  comprarProducto(){
   if(window.confirm("Quieres comprar esta cant de prod?")){
    this.productoS.actualizarStock(this.id,this.productData).subscribe(data=>{
      this.productData = data,
      Swal.fire({
        title: 'Compra Realizada con exito',
        text: 'Tu compra ya esta en camino',
        imageUrl: 'https://img.freepik.com/vector-gratis/paquete-envio-mensajeria-ciclomotor-ilustracion-plana_74855-5227.jpg?w=826&t=st=1667790586~exp=1667791186~hmac=0dd10087c1cd0b0b5885e73f12a9cde0230d4a83ee3b5f5f4953a1646f77132a',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      this.router.navigate(['/listar-productos'])
      

    })
  }
   }
}
