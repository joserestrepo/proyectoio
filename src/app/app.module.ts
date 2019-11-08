import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { KatexModule } from 'ng-katex';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule } from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


import { HttpClientModule } from '@angular/common/http';



import { APP_ROUTING } from './app.route';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SimulacionComponent } from './components/simulacion/simulacion.component';
import { PrimercaractermayusculaPipe } from './pipes/primercaractermayuscula.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SimulacionComponent,
    PrimercaractermayusculaPipe
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
