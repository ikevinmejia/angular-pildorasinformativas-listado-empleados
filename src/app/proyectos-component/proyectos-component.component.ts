import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoModule } from '../empleado/empleado.module';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent {

  constructor(private router:Router, private empleadosService:EmpleadosService) {

  }

  inputName:string = '';
  inputLastName:string = '';
  inputRole:string = '';
  inputPayment:number = 0;

  setNewEmployer():void {
    const employer = new EmpleadoModule(this.inputName, this.inputLastName, this.inputRole, this.inputPayment)
    // this.miServicio.muestraMensaje('Empleado registrado');
    this.empleadosService.agregarEmpleadoServicio(employer);
    this.volverHome();
  }

  volverHome(){
    this.router.navigate([''])
  }
}
