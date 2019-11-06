import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SimulacionComponent } from './components/simulacion/simulacion.component'
const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'simulacion', component: SimulacionComponent },
    { path: '', pathMatch:'full', redirectTo:"home"},
    { path: '**', pathMatch:'full', redirectTo:"home"}


    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING= RouterModule.forRoot(ROUTES)
