import { Component, OnInit, ChangeDetectorRef, SimpleChanges   } from '@angular/core';
import { Datos } from '../../clases/datos';

import Swal from 'sweetalert2'


import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { SimplexService } from '../../services/simplex.service';

import { Router }  from '@angular/router'



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

  constructor(private changeDetector: ChangeDetectorRef,
    private simplex_service:SimplexService,
    private router:Router) {

    this.formulario.tipo_optimizacion = "max";
    this.formulario.vd = null;
   }

  ngOnInit() {
     this.forma = new FormGroup({
      'numero_variables_decision' : new FormControl('',Validators.required),
      'tipo_optimizacion': new FormControl('max',Validators.required),
      'funcion_objetivo': new FormArray([]),
      'numero_restricciones': new FormControl('',Validators.required),
      'restricciones': new FormArray([
        new FormControl('',Validators.required)
      ])
    })

    this.forma.controls.numero_variables_decision.valueChanges.subscribe( data =>{

      if( data != null  &&  this.control_fo != data){
        this.llenarFuncionObjetivo(data);
        this.control_fo = data;
      }
    });

    this.forma.controls.numero_restricciones.valueChanges.subscribe( data =>{

      if( data != null  &&  this.control_restricciones != data){
        this.llenarRestricciones(data);
        this.control_restricciones = data;
      }
    });

  }


  llenarFuncionObjetivo(value){
      (<FormArray>this.forma.controls.funcion_objetivo).clear();
      this.forma.controls.numero_restricciones.reset();
      this.control_restricciones = null;
      for(var i=0; i<value; i++){
        (<FormArray>this.forma.controls.funcion_objetivo).push( new FormControl('',Validators.required));
      }

  }


  llenarRestricciones(value){
    (<FormArray>this.forma.controls.restricciones).clear();
    for(var i=0; i<value;i++){
      let lista_auxiliar = new FormArray([]);
      (<FormArray>lista_auxiliar).push(new FormControl("<=",Validators.required));
      (<FormArray>lista_auxiliar).push(new FormControl('',Validators.required));
      for(var j=0; j<this.forma.controls.numero_variables_decision.value;j++){
        (<FormArray>lista_auxiliar).push(new FormControl('',Validators.required));
      }
      (<FormArray>this.forma.controls.restricciones).push(new FormGroup({ 'restriccion': lista_auxiliar }));
    }
  }

  evaluarDatos(){
    console.log(this.forma)
    if( this.forma.valid ){
      this.simplex_service.solucionarProblema(this.forma.value).subscribe(data =>{
        console.log(data)
        if(data['estado']){
          this.router.navigate(['/solucion'])
        }else{
          this.router.navigate(['/sinSolucion'])
        }

      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El formulario esta incompleto, verifica y vuelve a intentarlo!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    }

  }


}
