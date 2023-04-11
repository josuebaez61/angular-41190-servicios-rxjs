import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosService } from '../services/alumnos.service';
import { API_URL } from '../injection-tokens';



@NgModule({
  declarations: [
    AlumnosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlumnosComponent
  ],
  providers: [
    {
      provide: AlumnosService,
      useFactory: () => {
        return new AlumnosService(false)
      }
    },
    // {
    //   provide: AlumnosService,
    //   useClass: AlumnosMockService,
    // },
    {
      provide: 'IS_DEV',
      useValue: false,
    },
    {
      provide: API_URL,
      useValue: 'http://localhost:3500/alumnos'
    }
  ]
})
export class AlumnosModule { }
