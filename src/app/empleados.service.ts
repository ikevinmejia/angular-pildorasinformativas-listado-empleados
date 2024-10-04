import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { EmpleadoModule } from './empleado/empleado.module';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(
    private servicioVentanaEmergente: ServicioEmpleadosService,
    private dataService: DataServices,
  ) { }

  public empleados:EmpleadoModule[] = [];

  // public empleados:EmpleadoModule[] = [
  //   new EmpleadoModule('Juan', 'Cuadros', 'Presidente', 5000),
  //   new EmpleadoModule('Kevin', 'Mejía', 'CEO', 4800),
  //   new EmpleadoModule('Felipe', 'Foronda', 'Marketing', 3000),
  //   new EmpleadoModule('Gala', 'Montes', 'Contabilidad', 2500),
  // ];

  setEmpleados(misEmpleados:EmpleadoModule[]){
    this.empleados = misEmpleados;
  }

  getEmpleados(){
    return this.dataService.getEmpleados()
  }

  agregarEmpleadoServicio(empleado:EmpleadoModule){

    this.servicioVentanaEmergente.muestraMensaje('Perfil agregado')
    this.empleados.push(empleado);

    this.dataService.guardarEmpleado(this.empleados)
  }

  actualizarEmpleadoService(index:number, empleado: EmpleadoModule):void{
    this.empleados[index] = empleado;

    this.dataService.updateEmpleado(index, empleado);
  }

  eliminarEmpleadoService(index: number):void {
    this.empleados.splice(index, 1)
    this.dataService.deleteEmpleado(index)
  }
}
