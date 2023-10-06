import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConseccionarioObj } from '../interfaces/conseccionario';

@Injectable({
  providedIn: 'root'
})
export class ConseccionarioServiceService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }



    // Método get  para listar Conseccionario
    conseccionesLista( ) {
      const url = `${this.baseUrl}/conseccionario/listConseccionarias`
      console.log(url);
      
      return this.http.get<string[]>(url);
    }


    //Método get  para listar Conseccionario sum
    conseccionesListaCount( ) {
      const url = `${this.baseUrl}/conseccionario/listcantidad`
      console.log(url);
      
      
  return this.http.get<ConseccionarioObj[]>(url).pipe(
    catchError(error => {
      console.error('Error en la solicitud:', error);
      return of([]); // Devuelve un arreglo vacío en caso de error
    })
  );
    }

}
