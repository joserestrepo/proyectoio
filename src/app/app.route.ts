import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { InstruccionesComponent } from './components/instrucciones/instrucciones.component';
import { SimulacionComponent } from './components/simulacion/simulacion.component'

import { SinSolucionComponent } from './components/sin-solucion/sin-solucion.component'
import { SolucionComponent } from './components/solucion/solucion.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'instrucciones', component: InstruccionesComponent },
    { path: 'acerca-de', component: AcercaDeComponent },
    { path: 'simulacion', component: SimulacionComponent },
    { path: 'sinSolucion', component: SinSolucionComponent },
    { path: 'solucion', component: SolucionComponent },

    { path: '', pathMatch:'full', redirectTo:"home"},
    { path: '**', pathMatch:'full', redirectTo:"home"}


    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING= RouterModule.forRoot(ROUTES)
