import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL:string = 'https://restcountries.eu/rest/v2';

  get httpParams () {
    return new HttpParams().set('fields', 'name;flag;alpha2Code');
  }
  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Pais[]>{
    const url = `${ this.apiURL }/name/${ termino }`
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }

  buscarPorCapital(termino:string):Observable<Pais[]> {
    const url = `${ this.apiURL }/capital/${ termino }`;
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }

  getPaisPorCodigo(id:string):Observable<Pais> {
    const url = `${ this.apiURL }/alpha/${ id }`;
    return this.http.get<Pais>( url );
  }

  buscarPorRegion(region:string):Observable<Pais[]> {
    
    const url = `${ this.apiURL }/region/${ region }`;
    return this.http.get<Pais[]>( url, { params: this.httpParams } )
            .pipe(
              tap(console.log)
            );
  }
}
