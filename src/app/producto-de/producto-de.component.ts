import { Component, OnInit } from '@angular/core';
import { RegistrarComponent } from '../registrar/registrar.component';
import { Producto } from '../model/producto';
import { ProductoService } from '../servicios/producto.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-producto-de',
  templateUrl: './producto-de.component.html',
  styleUrls: ['./producto-de.component.css']
})
export class ProductoDeComponent implements OnInit {
 Producto: any=[];
 

  constructor(private productoS:ProductoService) { }

  ngOnInit(): void {
  
   this.cargarProductos()
  
   
  }

  getData() {
    return sessionStorage.getItem('name');
  }

  cargarProductos() {
    return this.productoS.getProducts().subscribe((data: {}) => {
      this.Producto = data;
    });
  }
  

}




