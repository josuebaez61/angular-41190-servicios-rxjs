import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { Alumno, ApiService } from '../services/api.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
  providers: [
    {
      provide: ApiService,
      useFactory: () => {
        return new ApiService('alumnos')
      }
    },
  ],
})
export class AlumnosComponent implements OnInit, OnDestroy {

  alumnos: Alumno[] = [];
  cargando = false;

  miSusbscripcion: Subscription | null = null;

  constructor(private apiService: ApiService) {
    console.log(this.apiService.getById(1));
  }

  ngOnDestroy(): void {
    this.miSusbscripcion?.unsubscribe();
  }

  ngOnInit(): void {
    this.cargarAlumnos();
    this.escrucharContador();
    this.obtenerAlumnos();
  }


  cargarAlumnos(): void {
    this.cargando = true
    this.apiService.getListado().subscribe({
      // EQUIVALE A PROMISE THEN
      next: (alumnos) => {
        this.alumnos = alumnos;
      },

      // EQUIVALE A PROMISE CATCH
      error: (error) => {
        alert(error)
      },

      // EQUIVALE A PROMISE FINALLY
      complete: () => {
        this.cargando = false;
      }
    })
  }

  async obtenerAlumnos() {
    const miPeticion = new Promise<Alumno[]>((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            nombre: 'Josue'
          },
          {
            id: 2,
            nombre: 'Cynthia'
          }
        ])
      }, 2000);
    })


    // miPeticion
    //   .then((resultado) => console.log(resultado))
    //   .then((alumno1) => console.log(alumno1))
    //   .catch((error) => alert(error.error))
    //   .finally(() => console.log('La promesa finalizo'));

    console.log(await miPeticion);
  }


  escrucharContador() {
    // then, catch, finally
    // next, error, complete
    const obs$ = new Observable(
      (observer) => {
        let contador = 1;

        setInterval(() => {
          observer.next(contador++)
          // if (contador === 2) {
          //   observer.error({ error: 'El contador es 2' })
          // }
          if (contador === 5) {
            observer.complete();
          }
        }, 1000);
      }
    );



    this.miSusbscripcion = obs$.subscribe((val) => console.log(val));

  }

  // constructor(
  //   // PascalCase (tipos, clases, interfaces, enums...)
  //   // camelCase
  //   private alumnosService: AlumnosService,
  // ) {
  // }
}

