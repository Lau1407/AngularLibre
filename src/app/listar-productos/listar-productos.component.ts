import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginComponent } from '../login/login.component';
import { RegistrarComponent } from '../registrar/registrar.component';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  filtrarproducto = '';
  Producto: any = [];
  id = this.actRoute.snapshot.params['id'];

  admin ={"nombre":"admini", "contrasena":"admini"}

  constructor(public productoS: ProductoService,
    public actRoute: ActivatedRoute,
    public router: Router ) { }

  ngOnInit(): void {
    this.cargarProductos();

  }

  cargarProductos() {
    return this.productoS.getProducts().subscribe((data: {}) => {
      this.Producto = data;
    });
  }
  

  BorrarProducto(id : string){
  Swal.fire({
    title: 'Producto Eliminado Correctamente',
    icon: 'success',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Ok'
  })
  
     
    this.productoS.deleteProduct(id)
    .subscribe(data=>{
      this.cargarProductos();
    })

  }

  getData() {
    return sessionStorage.getItem('name');
  }
  eliminarSession(){
    sessionStorage.removeItem("name");
    this.router.navigate(['/login'])
  }

  }


