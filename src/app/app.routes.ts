import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CotizacionesComponent } from './pages/cotizaciones/cotizaciones.component';
import { PaqueteComponent } from './pages/paquete/paquete.component';
import { PaqueteDetailComponent } from './pages/paquete/paquete-detail/paquete-detail.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ListaCotizacionesComponent } from './pages/cotizaciones/lista-cotizaciones/lista-cotizaciones.component';
import { ReservaDetailComponent } from './pages/reserva/reserva-detail/reserva-detail.component';
import { ReservaEditComponent } from './pages/reserva/reserva-edit/reserva-edit.component';
import { CotizacionDetailComponent } from './pages/cotizaciones/cotizacion-detail/cotizacion-detail.component';
import { PaqueteEditComponent } from './pages/paquete/paquete-edit/paquete-edit.component';

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
    path:'paquete-detail', component:PaqueteDetailComponent
  },
  {
    path:'reserva',
    component:ReservaComponent
  },
  
  { path: 'lista-cotizaciones', 
    component: ListaCotizacionesComponent },
  {
    path:'reserva-detail',
    component: ReservaDetailComponent
  },
  {
    path:'reserva-edit',
    component: ReservaEditComponent
  },
  {
    path:'cotizacion-detail',
    component: CotizacionDetailComponent,
  },
  {
    path:'paquete-edit',
    component:PaqueteEditComponent,
  }

];
