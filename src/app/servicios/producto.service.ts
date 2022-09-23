import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PeticionProducto } from '../model/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 private url = 'http://127.0.0.1:8000/api/producto_get'

  constructor(private http : HttpClient) { }

  getProductos(url : String){
    
    return this.http.get<PeticionProducto>(this.url);
   }

   onSubmit(){ 
    console.log("onSubmit(): ver datos de producto "+ this.getProductos);
   }
   
  }



