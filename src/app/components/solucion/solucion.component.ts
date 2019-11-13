import { Component, OnInit } from '@angular/core';
import { SimplexService } from '../../services/simplex.service';

@Component({
  selector: 'app-solucion',
  templateUrl: './solucion.component.html',
  styleUrls: ['./solucion.component.css']
})
export class SolucionComponent implements OnInit {

  public listas: any [];
  public solucion;
  public descripcion;
  constructor(private simplexService: SimplexService ) { 
    
    //this.listas = this.simplexService.resultados.lista_interacciones;
  }

  ngOnInit() {
    this.simplexService.solucionarProblema("").subscribe(data=>{
      console.log(data)
      this.listas = data.lista_interacciones
      this.solucion = data.solucion
    console.log(this.listas)
    });
  }
}
