import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../servicios/producto.service'; 
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
    private productoS: ProductoService,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
    }) 
  }
  login(){
    const formValue = this.loginForm.value
    this.productoS.login(formValue.username,formValue.password).subscribe({next: (res) => {
      console.log(res)
      localStorage.setItem('token',res.token)
      this.router.navigate(['/'])
    },error : (err)=>{
      this.message='Wrong username or password!!'
    }})
  }
}