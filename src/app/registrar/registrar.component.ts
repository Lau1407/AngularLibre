import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../servicios/producto.service';

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
    private productoS: ProductoService
  ) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre:['',Validators.required],
      contrasena:['',Validators.required]
    }) 
  }
  register(){
    const formValue = this.registerForm.value
    this.productoS.register(formValue.nombre,formValue.contrasena).subscribe({next:() => {
      this.success = true
    }})
  }
}