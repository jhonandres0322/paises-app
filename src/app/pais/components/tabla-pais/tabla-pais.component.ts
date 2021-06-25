import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
  styles: [
  ]
})
export class TablaPaisComponent{

  @Input() paises:Pais[] = [];

  constructor() { }

}
