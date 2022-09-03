import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { EstudiantesComponent } from './componentes/estudiantes/estudiantes.component';
import { LoginComponent } from './componentes-princip/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', title:'login', component:LoginComponent , },
  {path:'cursos', title:'cursos', component:CursosComponent},
  {path:'estudiantes', title: 'estudiantes',component:EstudiantesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
