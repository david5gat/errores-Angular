import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgmaterialModule } from './modulosextra/ngmaterial/ngmaterial.module';
import { ToolbarComponent } from './componentes/toolbar/toolbar/toolbar.component';
import { EstudiantesComponent } from './componentes/estudiantes/estudiantes.component';
import { DailogNuevoCursoComponent } from './componentes/dailog-nuevo-curso/dailog-nuevo-curso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogNuevoEstudianteComponent } from './componentes/dialog-nuevo-estudiante/dialog-nuevo-estudiante.component';
import { LoginComponent } from './componentes-princip/login/login.component';
import { CursosModule } from './componentes/escuela.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgmaterialModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
