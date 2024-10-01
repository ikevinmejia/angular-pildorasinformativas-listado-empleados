import { Component, OnInit } from '@angular/core';
import { EmpleadoModule } from './empleado/empleado.module';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    // private miServicio:ServicioEmpleadosService,
    private empleadosService:EmpleadosService,
  ) {
    // this.empleados = empleadosService.empleados;
  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
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
}
