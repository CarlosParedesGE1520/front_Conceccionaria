import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Redes } from '../interfaces/redes';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {
  private baseUrl: string = 'http://localhost:3000/grafica'
  constructor(private http: HttpClient) { }

  getRedes(){
    return this.http.get(`${this.baseUrl}`)
  }


  getRedesDona(){
    return this.getRedes()
    .pipe(
      map(data => {
        const labels = Object.keys(data);
        const values = Object.values(data);

      return {labels, values};
      })
    )
  }
}
