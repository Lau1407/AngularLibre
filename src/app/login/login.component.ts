import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, UrlSegment } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message = '';
  isSuccessful: true;


  
  
  constructor(
    private formBuilder: FormBuilder,
    private usuarioS: UsuarioService,
    private router:Router,
  
  ) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nombre:['',[
        Validators.required,
        Validators.minLength(3)
      ]],
      contrasena:['',[Validators.required,Validators.minLength(3)]]
   
    })
 
    
  }





  login(){
    const formValue = this.loginForm.value
    this.usuarioS.login(formValue.nombre,formValue.contrasena).subscribe({next: (res) => {
      console.log(res),
      this.isSuccessful = true
      this.router.navigate(['/listar-productos'])
    },error : (res)=>{
      this.message='Error en usuario y/o contraseña'
    }})
  }
  


}