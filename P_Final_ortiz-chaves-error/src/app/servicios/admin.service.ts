import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';


export interface Cursos {
  nombre_profesor: string,
  apellido_profesor: string,
  curso: string,
  comision: number,
  alumnos : number,
  estado:boolean
 }

 export interface estudiantes {
  id: number,
  nombre: string,
  apellido: string,
  edad: number,
  curso: string
 }

 const estudiantes: estudiantes[] = [
  {id : 1 , nombre : 'david', apellido : 'ortiz' , edad : 22, curso: 'angular'}
 ]


const curso : Cursos[] = [
  {nombre_profesor : 'david', apellido_profesor: 'ortiz',curso: 'Angular', comision: 1252, alumnos: 23, estado: true},
  {nombre_profesor : 'abner', apellido_profesor: 'garcia',curso: 'Angular', comision: 1252, alumnos: 34, estado: false}
]

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  mandarcurso2(){
    return curso;
  }


  constructor() { }

  mandarEstudiantes(){
    return estudiantes;
  }

  mandarCurso(): Observable<Cursos[]>{
    const cursos$ = of (curso);
    return cursos$;
  }


}
