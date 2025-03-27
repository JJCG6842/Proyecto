import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CotizacionesComponent } from './pages/cotizaciones/cotizaciones.component';
import { PaqueteComponent } from './pages/paquete/paquete.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'inicio'
  },
  {
    path:'inicio',
    component:InicioComponent
    
  },
  {
    path:'cotizaciones',
    component:CotizacionesComponent
  },
  {
    path:'paquete',
    component:PaqueteComponent
  },
  {
    path:'reserva',
    component:ReservaComponent
  },
  {
    path:'clientes',
    component: ClientesComponent
  }
];
