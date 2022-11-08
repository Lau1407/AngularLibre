import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Producto } from '../model/producto';
import { retry, catchError } from 'rxjs/operators';
import { AnimateTimings } from '@angular/animations';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = "http://127.0.0.1:8000/api";

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getProducts(): Observable<Producto> {
    return this.http
      .get<Producto>(this.url+ '/producto_get_all')
      .pipe(retry(1), catchError(this.handleError));
  }

  getProduct(id: any): Observable<Producto> {
    return this.http
      .get<Producto>(this.url + '/producto_get/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  createProduct(product: any): Observable<Producto> {
    return this.http
      .post<Producto>(
        this.url + '/producto_create',
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  actualizarProducto(id: any, product: any, categoria:any): Observable<Producto> {
    return this.http
      .put<Producto>(
        this.url + '/products/' + id,
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteProduct(id: any) {
    return this.http
      .delete<Producto>(this.url + '/producto_delete/' + id, 
       this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getCategory(): Observable<Producto>{
    return this.http.get<Producto>(this.url + '/categoria_get')
    .pipe(retry(1), catchError(this.handleError));
  }

  actualizarStock(id:any, product:any): Observable<Producto>{
    return this.http.put<Producto>(this.url + '/stock/' + id,
    JSON.stringify(product))

  }
  
 

  

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
  }



