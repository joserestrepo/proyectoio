import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators' ; 

import { Api } from '../clases/api.config';




@Injectable({
  providedIn: 'root'
})
export class SimplexService {

  private api:Api;
  private resultados = {
    'lista_interacciones': [],
    'estado' : true,
  }
  constructor( private httpCliente:HttpClient ) { 
    this.api = new Api();
  }

  solucionarProblema(datos){

    let header = new HttpHeaders();
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    header.append('GET', 'POST');
    header.append('Content-Type', 'application/json');
    header.append('No-Auth', 'True');

    return this.httpCliente.post(this.api.urlApi+"simplex",datos,{headers:header}).pipe(map(data => {
        this.resultados['lista_interacciones'] = data['lista_interacciones'];
        this.resultados['estado'] = data['estado'];
        return this.resultados;
     }));
     
  }
}