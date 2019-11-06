import { Component, OnInit, ChangeDetectorRef, SimpleChanges   } from '@angular/core';
import { Datos } from '../../clases/datos';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


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
  private forma:FormGroup;

  constructor(private changeDetector: ChangeDetectorRef) {
    this.formulario.tipo_optimizacion = "max";
    this.formulario.vd = null;
   }

  ngOnInit() {
     this.forma = new FormGroup({
      'numero_variables_decision' : new FormControl(),
      'tipo_optimizacion': new FormControl('max'),
      'funcion_objetivo': new FormArray([]),
      'numero_restricciones': new FormControl(),
      'restricciones': new FormArray([])
    })
  }


  llenarFuncionObjetivo(value){
    this.forma.controls.funcion_objetivo = new FormArray([])
    for(var i=0; i<value; i++){
      (<FormArray>this.forma.controls.funcion_objetivo).push( new FormControl(0));
    }
  }


  llenarRestricciones(value){
    this.forma.controls.restricciones = new FormArray([]);
    for(var i=0; i<value;i++){
      let lista_auxiliar = new FormArray([]);
      (<FormArray>lista_auxiliar).push(new FormControl("<="));
      (<FormArray>lista_auxiliar).push(new FormControl(0));
      for(var j=0; j<this.forma.controls.numero_variables_decision.value;j++){
        (<FormArray>lista_auxiliar).push(new FormControl(0));
      }
      (<FormArray>this.forma.controls.restricciones).push(new FormGroup({ 'restriccion': lista_auxiliar} ));
    }
  }

  evaluarDatos(){
    console.log(this.forma)
  }


}
