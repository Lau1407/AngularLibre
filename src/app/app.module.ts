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
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { provideErrorTailorConfig } from '@ngneat/error-tailor';








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
    
    

   
   
  
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,

  ],
  providers: [ {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '1065566128187-jqd0pmnd09v6s29pjej6sh7f31dstck9.apps.googleusercontent.com'
          )
        },
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  
  },
  provideErrorTailorConfig({
    errors: {
      useValue: {
        required: 'Este campo es requerido',
        minlength: ({ requiredLength, actualLength }) => 
                    `Expect ${requiredLength} but got ${actualLength}`,
        invalidAddress: error => `Address isn't valid`
      }
    }
  })

],
  bootstrap: [AppComponent]
})
export class AppModule { }
