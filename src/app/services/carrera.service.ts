import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrera } from '../models/carrera';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  url: string = "https://localhost:44336/api/Carrera";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  save(c: Carrera): Observable<any> {
    const carreraBody = JSON.stringify(c);
    console.log(c);
    if (c.idCarrera === undefined){
      return this.http.post<any>(this.url, carreraBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, carreraBody, this.httpOptions);
  }

  retrieve(id: number): Observable<Carrera> {
    return this.http.get<Carrera>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  delete(c: Carrera): Observable<any> {
    return this.http.delete<any>(this.url + '/' + c.idCarrera,
      this.httpOptions);
  }

  list(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }
  search(criteria: string): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(this.url.concat("?criteria=").concat(criteria), this.httpOptions)
      .pipe(
        retry(1)
      );
  }
}
