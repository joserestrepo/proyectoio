import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';




import { Api } from '../clases/api.config';




@Injectable({
  providedIn: 'root'
})
export class SimplexService {

  private api:Api;
  private header:HttpHeaders;

  constructor( private httpCliente:HttpClient ) { 
    this.api = new Api();
    this.header = new HttpHeaders();
    this.header.append('Access-Control-Allow-Origin', '*');
    this.header.append('Access-Control-Allow-Credentials', 'true');
    this.header.append('GET', 'POST');
    this.header.append('Content-Type', 'application/json');
    this.header.append('No-Auth', 'True');
    console.log(this.header)
  }

  solucionarProblema(){
    let header = new HttpHeaders();
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    header.append('GET', 'POST');
    header.append('Content-Type', 'application/json');
    header.append('No-Auth', 'True');
    return this.httpCliente.get(this.api.urlApi+"simplex",{headers:header});
  }
}
