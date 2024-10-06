import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmpleadoModule } from "./empleado/empleado.module";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService,
  ) {}

  private dbUrl:string = 'https://angular-pildoras-informaticas-default-rtdb.firebaseio.com/datos.json'

  getEmpleados(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get(`${this.dbUrl}?auth=${token}`)
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
