import { Component } from '@angular/core';
import { EmpleadoModule } from './empleado/empleado.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public empleados:EmpleadoModule[] = [
    new EmpleadoModule('Juan', 'Cuadros', 'Presidente', 5000),
    new EmpleadoModule('Kevin', 'Mejía', 'CEO', 4800),
    new EmpleadoModule('Felipe', 'Foronda', 'Marketing', 3000),
    new EmpleadoModule('Gala', 'Montes', 'Contabilidad', 2500),
  ];

  inputName:string = '';
  inputLastName:string = '';
  inputRole:string = '';
  inputPayment:number = 0;

  setNewEmployer():void {
    const employer = new EmpleadoModule(this.inputName, this.inputLastName, this.inputRole, this.inputPayment)
    this.empleados.push(employer)
  }
}
