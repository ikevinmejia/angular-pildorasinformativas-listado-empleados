import { Component, Input } from '@angular/core';
import { EmpleadoModule } from '../empleado.module';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

  @Input() empleadoDeLista:EmpleadoModule;
  @Input() indice:number;


  arrayCaracteristicas = [''];

  agregarCaracteristicas(nuevaCaracteristica:string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica)
  }
}
