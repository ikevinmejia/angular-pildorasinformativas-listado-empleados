import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoModule } from '../empleado/empleado.module';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrl: './actualiza.component.css'
})
export class ActualizaComponent implements OnInit{

  constructor(
    private router:Router,
    private empleadosService:EmpleadosService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Aqui se extrae el query param de la url
    this.indice = this.route.snapshot.params['id'];
    this.action = this.route.snapshot.queryParams['action'];

    const empleado:EmpleadoModule = this.empleadosService.empleados[this.indice]

    this.inputName = empleado.nombre;
    this.inputLastName = empleado.apellido;
    this.inputRole = empleado.cargo;
    this.inputPayment = empleado.salario;
  }

  inputName:string = '';
  inputLastName:string = '';
  inputRole:string = '';
  inputPayment:number = 0;
  indice:number;
  action:string;

  updateEmployer():void {
    const employer = new EmpleadoModule(this.inputName, this.inputLastName, this.inputRole, this.inputPayment)
    // this.miServicio.muestraMensaje('Empleado registrado');
    this.empleadosService.actualizarEmpleadoService(this.indice,employer);
    this.volverHome();
  }

  deleteEmployer():void{
    this.empleadosService.eliminarEmpleadoService(this.indice);
    this.volverHome();
  }

  volverHome(){
    this.router.navigate([''])
  }
}
