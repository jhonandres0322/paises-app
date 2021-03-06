import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino:string = '';  
  hayError:boolean = false;
  paises:Pais[] = [];

  constructor(private paisService:PaisService) {}

  buscar( termino:string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPorCapital(this.termino)
      .subscribe( (paises) => {
        this.paises = paises;
      }, (error) => {
        this.hayError = true;
        this.paises = [];
      });
  }
  
  sugerencias( termino:string ) {
    this.hayError = false;
    // TODO: crear sugerencias
  }
}
