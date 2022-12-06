import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import {  RegistrarComponent } from './registrar/registrar.component';
import { LoginComponent } from './login/login.component';
import { FilterPipe } from './filtrarProductos/filter-product.pipe';
import { ComprarProductoComponent } from './comprar-producto/comprar-producto.component';
import {MatSelectModule} from '@angular/material/select';
import { ProductoDeComponent } from './producto-de/producto-de.component';










@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    EditarProductosComponent,
    CrearProductoComponent,
    RegistrarComponent,
    LoginComponent,
    FilterPipe,
    ComprarProductoComponent,
    ProductoDeComponent
    
    

   
   
  
   
  ],
  imports:[
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
    
  ],
  providers: [ 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
