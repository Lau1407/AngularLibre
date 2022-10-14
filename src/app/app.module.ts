import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';




@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    EditarProductosComponent,
    CrearProductoComponent,
   
  
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
