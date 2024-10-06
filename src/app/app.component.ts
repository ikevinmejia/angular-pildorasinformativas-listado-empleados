import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { EmpleadoModule } from './empleado/empleado.module';
import { EmpleadosService } from './empleados.service';
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    // private miServicio:ServicioEmpleadosService,
    private empleadosService:EmpleadosService,
    private LoginService: LoginService,
  ) {
    // this.empleados = empleadosService.empleados;
  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    firebase.initializeApp({
      apiKey: "AIzaSyDk394m8CsIkK50M4eYfCaFqmcUFrx2c8s",
      authDomain: "angular-pildoras-informaticas.firebaseapp.com"
    })
  }

  empleados:EmpleadoModule[] = [];

  inputName:string = '';
  inputLastName:string = '';
  inputRole:string = '';
  inputPayment:number = 0;

  setNewEmployer():void {
    const employer = new EmpleadoModule(this.inputName, this.inputLastName, this.inputRole, this.inputPayment)
    // this.miServicio.muestraMensaje('Empleado registrado');
    this.empleadosService.agregarEmpleadoServicio(employer);
  }

  estaLogueado(){
    return this.LoginService.estaLogueado();
  }

  logout() {
    this.LoginService.logout();
  }
}
