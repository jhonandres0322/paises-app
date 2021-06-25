import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones:string[] =  ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string = '';

  paises:Pais[] = [];

  constructor( private paisService:PaisService) { }

  activarRegion(region:string) {
    if ( region === this.regionActiva ) return;
    this.regionActiva = region;
    this.paises = [];
    // TODO: hacer el llamado al servicio por region
    this.paisService.buscarPorRegion(region)
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;
      }, (error) => {
        this.paises = [];
      });
  }

  getClaseCSS(region:String) {
    return (region === this.regionActiva) 
            ? 'btn btn-primary' 
            :'btn btn-outline-primary ';
  }
}
