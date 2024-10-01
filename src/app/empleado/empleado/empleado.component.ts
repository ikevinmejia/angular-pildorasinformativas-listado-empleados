import { Component, Input } from '@angular/core';
import { ServicioEmpleadosService } from '../../servicio-empleados.service';
import { EmpleadoModule } from '../empleado.module';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

  constructor(private popUp:ServicioEmpleadosService) {}

  @Input() empleadoDeLista:EmpleadoModule;
  @Input() indice:number;


  arrayCaracteristicas = [''];

  agregarCaracteristicas(nuevaCaracteristica:string) {
    this.popUp.muestraMensaje('Caracteristica añadida: ' + nuevaCaracteristica)
    this.arrayCaracteristicas.push(nuevaCaracteristica)
  }
}
