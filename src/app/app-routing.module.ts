import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';


const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo: 'crear-producto' },
{ path: 'crear-producto', component: CrearProductoComponent },
{ path: 'listar-productos', component: ListarProductosComponent },
{ path: 'editar-productos/:id', component: EditarProductosComponent }]


@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
