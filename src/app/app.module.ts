import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnosModule } from './alumnos/alumnos.module';
import { ProfesoresModule } from './profesores/profesores.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlumnosModule,
    ProfesoresModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
