import { Component, OnInit } from '@angular/core';
import { Datos } from '../../clases/datos';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.css'],
  animations: [
    trigger('enterState', [
      state('void',style({
        transform : 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate("0.5s",style({
          transform:'translateX(0)',
          opacity:1
        }))
      ])
    ]),
    trigger('enterDifuminado', [
      state('void',style({
        opacity:0
      })),
      transition(':enter',[
        animate("0.5s",style({
          opacity:1
        }))
      ])
    ]),
    trigger('maxMin', [
      // ...
      state('max', style({
        transform : 'translateX(0)',
        opacity:1
      })),
      state('min', style({
        transform : 'translateX(0)',
        opacity:1
      })),
      transition('max => min', [
        animate('0.5s',style({
          transform : 'translateX(-100%)',
          opacity:0
        }))
      ]),
      transition('min => max', [
        animate('0.5s',style({
          transform : 'translateX(-100%)',
          opacity:0
        }))
      ]),
    ]),
  ],
})
export class SimulacionComponent implements OnInit {

  private formulario:Datos = new Datos;

  constructor() {
    this.formulario.tipo_optimizacion = "max";
    this.formulario.vd = 1;
   }

  ngOnInit() {
     
  }

  llenarFuncionObjetivo(value){
    this.formulario.fo = [];
    for(var i=0; i<value;i++){
      this.formulario.fo.push({ 'numero': 0 });
    }
    this.formulario.nRestricciones = null;
  }

  llenarRestricciones(value){
    this.formulario.restricciones = [];
    for(var i=0; i<value;i++){
      let lista_auxiliar = [];
      lista_auxiliar.push({'signo': "<="});
      lista_auxiliar.push({ 'igualacion': 0 });
      for(var j=0; j<this.formulario.vd;j++){
        lista_auxiliar.push({ 'numero': 0 })
      }
      this.formulario.restricciones.push(lista_auxiliar);
    }
  }

  evaluarDatos(){
    console.log(this.formulario)
  }


}
