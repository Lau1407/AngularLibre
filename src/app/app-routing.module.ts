import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';





const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo: 'registrar' },

{ path: 'crear-producto', component: CrearProductoComponent },
{ path: 'listar-productos', component: ListarProductosComponent },
{ path: 'editar-productos/:id', component: EditarProductosComponent },
{path : 'registrar', component : RegistrarComponent},
{path: 'login', component: LoginComponent},]


@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
