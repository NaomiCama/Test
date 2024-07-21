import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ComidaComponent } from './components/crear-comida/comida.component';
import { FormsModule } from '@angular/forms';
import { ComidaVistaComponent } from './components/comida-vista/comida-vista.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/crear-menu/menu.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { HistorialComponent } from './components/historial/historial.component';
import { NgxPaginationModule } from 'ngx-pagination'; // Importa el módulo de paginación
import { CrearMenu } from './components/crear-menu/crear-menu';
import { CrearComidaComponent } from './components/crear-comida/crear-comida.component';




@NgModule({
  declarations: [
    AppComponent,
    ComidaComponent,
    ComidaVistaComponent,
    MenuComponent,
    ReservaComponent,
    HistorialComponent,
    CrearMenu,
    CrearComidaComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
