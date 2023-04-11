import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesoresComponent } from './profesores.component';
import { AlumnosService } from '../services/alumnos.service';
import { ApiService } from '../services/api.service';
import { API_URL } from '../injection-tokens';



@NgModule({
  declarations: [
    ProfesoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfesoresComponent,
  ],
  providers: [
    {
      provide: API_URL,
      useValue: 'http://localhost:3500/profesores'
    }
  ]
})
export class ProfesoresModule { }
