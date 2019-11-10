import { Component, OnInit } from '@angular/core';

import { SimplexService } from '../../services/simplex.service';

@Component({
  selector: 'app-solucion',
  templateUrl: './solucion.component.html',
  styleUrls: ['./solucion.component.css']
})
export class SolucionComponent implements OnInit {

  constructor(private simplexService:SimplexService) { 
    console.log(this.simplexService.resultados)
  }

  ngOnInit() {
  }

}
