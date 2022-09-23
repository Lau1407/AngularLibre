import { Component, OnInit } from '@angular/core';
import { ProductoService } from './servicios/producto.service';
import { Observable } from 'rxjs';
import { UrlSegment } from '@angular/router';
import { PeticionProducto } from './model/producto';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'banana';

  
  constructor(public productoService : ProductoService){ }

  ngOnInit(): void{
    this.productoService.onSubmit();

  }

  cargarProductos(){
    this.productoService.getProductos("//127.0.0.1:8000/api/producto_get")
    .subscribe(respuesta => console.log(respuesta))
  }

 
  
  onSubmit(){ 
    console.log("ver datos de producto " + this.cargarProductos());
  }

  
}
