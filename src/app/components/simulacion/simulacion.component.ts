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
  private control_fo:number;
  private control_restricciones:number;

  constructor(private changeDetector: ChangeDetectorRef) {
    this.formulario.tipo_optimizacion = "max";
    this.formulario.vd = null;
   }

  ngOnInit() {
     this.forma = new FormGroup({
      'numero_variables_decision' : new FormControl(''),
      'tipo_optimizacion': new FormControl('max'),
      'funcion_objetivo': new FormArray([]),
      'numero_restricciones': new FormControl(''),
      'restricciones': new FormArray([
        new FormControl('')
      ])
    })

    this.forma.controls.numero_variables_decision.valueChanges.subscribe( data =>{
      console.log("cambio");
      if( data != null  &&  this.control_fo != data){
        this.llenarFuncionObjetivo(data);
        this.control_fo = data;
      }
    });

    this.forma.controls.numero_restricciones.valueChanges.subscribe( data =>{
      console.log("cambio");
      if( data != null  &&  this.control_restricciones != data){
        this.llenarRestricciones(data);
        this.control_restricciones = data;
      }
    });

  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
    this.changeDetector.detectChanges();
  }



  llenarFuncionObjetivo(value){
      (<FormArray>this.forma.controls.funcion_objetivo).clear();
      this.forma.controls.numero_restricciones.reset();
      this.control_restricciones = null;
      for(var i=0; i<value; i++){
        (<FormArray>this.forma.controls.funcion_objetivo).push( new FormControl(''));
      }
    
  }


  llenarRestricciones(value){
    (<FormArray>this.forma.controls.restricciones).clear();
    for(var i=0; i<value;i++){
      let lista_auxiliar = new FormArray([]);
      (<FormArray>lista_auxiliar).push(new FormControl("<="));
      (<FormArray>lista_auxiliar).push(new FormControl(0));
      for(var j=0; j<this.forma.controls.numero_variables_decision.value;j++){
        (<FormArray>lista_auxiliar).push(new FormControl(0));
      }
      (<FormArray>this.forma.controls.restricciones).push(new FormGroup({ 'restriccion': lista_auxiliar }));
    }
  }

  evaluarDatos(){
    console.log(this.forma)
  }


}
