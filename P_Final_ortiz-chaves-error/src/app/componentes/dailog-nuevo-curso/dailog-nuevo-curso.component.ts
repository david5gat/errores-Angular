import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Cursos } from 'src/app/servicios/admin.service';
import { AdminService } from '../../servicios/admin.service';

@Component({
  selector: 'app-dailog-nuevo-curso',
  templateUrl: './dailog-nuevo-curso.component.html',
  styleUrls: ['./dailog-nuevo-curso.component.scss']
})
export class DailogNuevoCursoComponent implements OnInit {

  Cursos : any[] = []

  constructor(
    private AdminService: AdminService,
    public dialogRef : MatDialogRef<Cursos>,
    private fb :FormBuilder
  ) {
  }

  ngOnInit(): void {
   this.Cursos = this.AdminService.mandarcurso2()
  }

  formNuevoCurso = this.fb.group({
    nombre_profesor : new FormControl (''),
    apellido_profesor: new FormControl (''),
    curso: new FormControl (''),
    comision: new FormControl (''),
    alumnos: new FormControl (''),
    estado: new FormControl ('')
  })

  enviarFormulario(){
    return this.formNuevoCurso
  }


  submit(){
    return this.formNuevoCurso
  }



}
