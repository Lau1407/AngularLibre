import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message = '';
  constructor(
    private formBuilder: FormBuilder,
    private usuarioS: UsuarioService,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nombre:['',Validators.required],
      contrasena:['',Validators.required]
   
    }) 
  }

  login(){
    const formValue = this.loginForm.value
    this.usuarioS.login(formValue.nombre,formValue.contrasena).subscribe({next: (res) => {
      console.log(res)
      this.router.navigate(['/listar-productos'])
    },error : (res)=>{
      this.message='Error en usuario y/o contraseña'
    }})
  }
}