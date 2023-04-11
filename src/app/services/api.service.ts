import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Alumno {
  id: number;
  nombre: string;
}

export class ApiService {

  constructor(
    // profesores | alumnos
    private entityName: string
  ) { }


  getById(id: number) {
    // const apiResult = this.httpClient.get(`http//localhost:3500/${this.entityName}`);
    // return apiResult;
    return {
      id,
      nombre: this.entityName === 'profesores' ? 'PROFESOR' : 'ALUMNO'
    }
  }


  getListado(): Observable<Alumno[]> {
    return new Observable<Alumno[]>((observer) => {
      setTimeout(() => {
        observer.next([
          {
            id: 1,
            nombre: 'Josue',
          },
          {
            id: 2,
            nombre: 'Naruto'
          }
        ])
        observer.complete();
      }, 2000);
    })
  }
}
