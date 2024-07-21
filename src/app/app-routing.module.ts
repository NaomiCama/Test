import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //
import { ComidaComponent } from './components/crear-comida/comida.component';
import { ComidaVistaComponent } from './components/comida-vista/comida-vista.component';
import { MenuComponent } from './components/crear-menu/menu.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { HistorialComponent } from './components/historial/historial.component';
const routes: Routes = [
  { path: 'comida', component: ComidaComponent },
  { path: 'vista', component: ComidaVistaComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'historial', component: HistorialComponent  },
  // Agrega otras rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
