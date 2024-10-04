import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmpleadoModule } from "./empleado/empleado.module";

@Injectable()
export class DataServices {
  constructor(
    private httpClient: HttpClient
  ) {}

  private dbUrl:string = 'https://angular-pildoras-informaticas-default-rtdb.firebaseio.com/datos.json'

  getEmpleados(){
    return this.httpClient.get(this.dbUrl)
  }

  guardarEmpleado(empleados: EmpleadoModule[]){
    this.httpClient.put(this.dbUrl, empleados).subscribe()
  }

  updateEmpleado(indice:number, empleado:EmpleadoModule){
    const urlUpdateByIndex = `https://angular-pildoras-informaticas-default-rtdb.firebaseio.com/datos/${indice}.json`
    this.httpClient.put(urlUpdateByIndex, empleado).subscribe();
  }

  deleteEmpleado(indice:number){
    const urlUpdateByIndex = `https://angular-pildoras-informaticas-default-rtdb.firebaseio.com/datos/${indice}.json`
    this.httpClient.delete(urlUpdateByIndex).subscribe();
  }
}
