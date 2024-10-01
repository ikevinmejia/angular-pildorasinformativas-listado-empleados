import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarecteristicasEmpleadoComponent } from './carecteristicas-empleado/carecteristicas-empleado.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { EmpleadoComponent } from './empleado/empleado/empleado.component';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';

const appRoutes:Routes = [
  {
    path: '',
    component: HomeComponentComponent,
    title: 'titulo de prueba'
  },
  {
    path: 'actualizar',
    component: ActualizaComponent,
    title: 'Actualizando'
  },
  {
    path: 'proyectos',
    component: ProyectosComponentComponent,
    title: 'el CEO?'
  },
  {
    path: 'quienes',
    component: QuienesComponentComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponentComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CarecteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ServicioEmpleadosService,
    EmpleadosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
