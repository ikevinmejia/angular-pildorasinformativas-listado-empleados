import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado/empleado.component';
import { CarecteristicasEmpleadoComponent } from './carecteristicas-empleado/carecteristicas-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CarecteristicasEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
