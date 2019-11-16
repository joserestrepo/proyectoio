import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { KatexModule } from 'ng-katex';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule } from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { HttpClientModule } from '@angular/common/http';



import { APP_ROUTING } from './app.route';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SimulacionComponent } from './components/simulacion/simulacion.component';
import { PrimercaractermayusculaPipe } from './pipes/primercaractermayuscula.pipe';
import { SinSolucionComponent } from './components/sin-solucion/sin-solucion.component';
import { SolucionComponent } from './components/solucion/solucion.component';
import { InstruccionesComponent } from './components/instrucciones/instrucciones.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SimulacionComponent,
    PrimercaractermayusculaPipe,
    SinSolucionComponent,
    SolucionComponent,
    InstruccionesComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    KatexModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
