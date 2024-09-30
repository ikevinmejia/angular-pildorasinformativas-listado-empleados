import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'carecteristicas-empleado',
  templateUrl: './carecteristicas-empleado.component.html',
  styleUrl: './carecteristicas-empleado.component.css'
})
export class CarecteristicasEmpleadoComponent {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  addCaracteristicas(value: string){
    this.caracteristicasEmpleados.emit(value)
  }
}
