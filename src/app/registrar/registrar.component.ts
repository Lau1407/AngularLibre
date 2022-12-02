import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  registerForm!: FormGroup;
  success = false;
  errMessage = ''
  
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private usuarioS: UsuarioService
  ) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre:['',[
        Validators.required,
        Validators.minLength(6)
      ]
      ],
      contrasena:['',[Validators.required, Validators.minLength(6)]],
      email:['',[Validators.required, Validators.email]],
      localidad:['',Validators.required]
    }) 
  }
  register(){
    const formValue = this.registerForm.value
    this.usuarioS.register(formValue.nombre,formValue.contrasena,formValue.email,formValue.localidad ).subscribe({next:() => {
      this.success = true
    }})
  }

  get name() { return this.registerForm.get('nombre'); }

  get contrasena() { return this.registerForm.get("contrasena"); }

  get email() { return this.registerForm.get("email"); }

  get localidad() { return this.registerForm.get("localidad"); }
}