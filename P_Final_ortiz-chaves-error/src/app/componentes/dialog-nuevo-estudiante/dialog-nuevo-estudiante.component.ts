import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AdminService, estudiantes } from '../../servicios/admin.service';

@Component({
  selector: 'app-dialog-nuevo-estudiante',
  templateUrl: './dialog-nuevo-estudiante.component.html',
  styleUrls: ['./dialog-nuevo-estudiante.component.scss']
})
export class DialogNuevoEstudianteComponent implements OnInit {


  estudiantes: estudiantes[] = [];

  constructor(
    private fb : FormBuilder,
    private AdminService: AdminService
  ) { }


  formNuevoEstudiante = this.fb.group({
    id : new FormControl (''),
    nombre: new FormControl (''),
    apellido: new FormControl (''),
    edad: new FormControl (''),
    curso: new FormControl ('')
  })


  enviarFormulario(){

  }

  ngOnInit(): void {

    this.estudiantes = this.AdminService.mandarEstudiantes()
  }

}
