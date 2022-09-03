import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService, estudiantes } from '../../servicios/admin.service';
import { DialogNuevoEstudianteComponent } from '../dialog-nuevo-estudiante/dialog-nuevo-estudiante.component';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  estudiantes : estudiantes[] = [
    {id:2 , nombre: 'juan', apellido: 'peres', edad :23 , curso: 'angular'}
  ]

  matTabledataCursos = new MatTableDataSource(this.estudiantes)


  displayedColumns = ['id','nombre', 'apellido','edad','curso']

  constructor(
    private AdminService : AdminService,
    private dialogNuevoEstudiante : MatDialog
  ) { }


  agregarEstudiantes(){}


  ngOnInit(): void {

    this.estudiantes = this.AdminService.mandarEstudiantes()
  }

  agregarEstudiante(){
    const dialogRef = this.dialogNuevoEstudiante.open(DialogNuevoEstudianteComponent,{
      width: '300px',
      height: '500px'
    })

}


}
