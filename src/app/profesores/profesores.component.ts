import { Component } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss'],
  providers: [
    {
      provide: ApiService,
      useFactory: () => {
        return new ApiService('profesores')
      }
    },
  ]
})
export class ProfesoresComponent {
  constructor(private apiService: ApiService) {
    console.log(this.apiService.getById(1));
  }
}
