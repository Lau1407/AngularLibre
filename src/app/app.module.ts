import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import {  RegistrarComponent } from './registrar/registrar.component';
import { LoginComponent } from './login/login.component'
import { AuthInterceptor } from './auth.interceptor';








@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    EditarProductosComponent,
    CrearProductoComponent,
    RegistrarComponent,
    LoginComponent
   
  
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
