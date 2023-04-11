import { Injectable } from '@angular/core';
import { AlumnosService } from './alumnos.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor(
    private alumnosService: AlumnosService
  ) { }

  getById(id: number) {
    return {
      id,
      nombre: 'Some profesore'
    }
  }
}
