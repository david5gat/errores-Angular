import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdminService, Cursos } from '../../servicios/admin.service';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Subscription, subscribeOn } from 'rxjs';
import { MatDialog, matDialogAnimations, MatDialogContainer, MatDialogRef } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { DailogNuevoCursoComponent } from '../dailog-nuevo-curso/dailog-nuevo-curso.component';




@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit,OnDestroy {



  Cursos: Cursos[] = [
    {nombre_profesor : 'david', apellido_profesor: 'ortiz',curso: 'Angular', comision: 1252, alumnos: 23, estado: true},
    {nombre_profesor : 'david', apellido_profesor: 'ortiz',curso: 'Angular', comision: 1252, alumnos: 23, estado: true},
  ]



  displayedColumns = ['nombre_profesor', 'apellido_profesor' , 'curso', 'comision', 'alumnos', 'estado']


 matTabledata : MatTableDataSource<Cursos> = new MatTableDataSource(this.Cursos)

  constructor(
    private AdminService : AdminService,
    private dialogNuevocurso : MatDialog
  ) {




  }


  obtenerCurso(){

    const nuevoProfesor = {
      nombre_profesor : 'david', apellido_profesor: 'ortiz',curso: 'Angular', comision: 1252, alumnos: 23, estado: true
    }
    this.Cursos.push(nuevoProfesor)

  }

  agregarCurso(){
    const dialogRef = this.dialogNuevocurso.open(DailogNuevoCursoComponent,{
      width: '300px',
      height: '500px',
      data: this.Cursos
    })


  }


  verAlumnos(){

  }

  ngOnInit(): void {
    this.Cursos = this.AdminService.mandarcurso2()

    this.obtenerCurso()
    console.log(this.Cursos);
    console.log(this.AdminService.mandarCurso)
  }

  ngOnDestroy(): void {

  }



}




