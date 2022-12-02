import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, UrlSegment } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { GoogleService } from '../google.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message = '';
  isSuccessful: true;

  loggedIn: boolean;
  user : gapi.auth2.GoogleUser


  
  
  constructor(
    private formBuilder: FormBuilder,
    private usuarioS: UsuarioService,
    private router:Router,
    private signInService : GoogleService,
    private ref : ChangeDetectorRef
  
  ) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nombre:['',[
        Validators.required,
        Validators.minLength(6)
      ]],
      contrasena:['',[Validators.required,Validators.minLength(6)]]
   
    })
    this.signInService.observable().subscribe(user =>{
      this.user = user,
      this.ref.detectChanges()
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
  signIn(){
    this.signInService.signin(),
    this.isSuccessful = true,
    this.router.navigate(['/listar-productos'])
  }
  signOut(){
    this.signInService.signOut()
  }


}