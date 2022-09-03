import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos/cursos.component';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { DailogNuevoCursoComponent } from './dailog-nuevo-curso/dailog-nuevo-curso.component';
import { DialogNuevoEstudianteComponent } from './dialog-nuevo-estudiante/dialog-nuevo-estudiante.component';
import { PantallaCursosComponent } from './pantalla-cursos/pantalla-cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgmaterialModule } from '../modulosextra/ngmaterial/ngmaterial.module';



@NgModule({
  declarations: [
    CursosComponent,
    ToolbarComponent,
    EstudiantesComponent,
    DailogNuevoCursoComponent,
    DialogNuevoEstudianteComponent,
    PantallaCursosComponent,],

  exports: [
    CursosComponent,
    ToolbarComponent,
    EstudiantesComponent,
    DailogNuevoCursoComponent,
    DialogNuevoEstudianteComponent,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgmaterialModule,
  ],
  imports: [

    CommonModule,
    CursosComponent,
    ToolbarComponent,
    EstudiantesComponent,
    DailogNuevoCursoComponent,
    DialogNuevoEstudianteComponent,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgmaterialModule,
  ]
})
export class CursosModule { }
