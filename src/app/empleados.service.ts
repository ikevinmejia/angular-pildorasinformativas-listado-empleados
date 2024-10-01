import { Injectable } from '@angular/core';
import { EmpleadoModule } from './empleado/empleado.module';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) { }

  public empleados:EmpleadoModule[] = [
    new EmpleadoModule('Juan', 'Cuadros', 'Presidente', 5000),
    new EmpleadoModule('Kevin', 'Mejía', 'CEO', 4800),
    new EmpleadoModule('Felipe', 'Foronda', 'Marketing', 3000),
    new EmpleadoModule('Gala', 'Montes', 'Contabilidad', 2500),
  ];

  agregarEmpleadoServicio(empleado:EmpleadoModule){

    this.servicioVentanaEmergente.muestraMensaje('Perfil agregado')
    this.empleados.push(empleado)
  }
}
