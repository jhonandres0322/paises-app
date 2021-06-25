import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais:Pais;

  constructor( 
    private activateRoute:ActivatedRoute,
    private paisService:PaisService  
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap( (params) => this.paisService.getPaisPorCodigo(params.id)),
        tap(console.log)
      )
      .subscribe( pais => this.pais = pais );
  }

}
