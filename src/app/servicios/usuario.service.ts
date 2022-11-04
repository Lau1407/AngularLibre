import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService {
    url = "http://127.0.0.1:8000/api";
  
    constructor(private http : HttpClient) { }
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    register(nombre:string,contrasena:string,email:string,localidad:string):Observable<any>{
        return this.http.post(this.url + '/crear_usuario',{nombre,contrasena,email,localidad})
      }
      login(nombre:string,contrasena:string):Observable<any>{
        return this.http.post(this.url + '/login',{nombre
    ,contrasena})
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