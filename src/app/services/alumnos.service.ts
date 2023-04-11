import { Inject, Injectable } from '@angular/core';

// @Injectable()
export class AlumnosService {

  constructor(
    private isQa: boolean,
  ) {
    console.log(this.isQa);
  }

  getById(id: number) {
    return {
      id,
      nombre: 'Some alumno'
    }
  }
}

