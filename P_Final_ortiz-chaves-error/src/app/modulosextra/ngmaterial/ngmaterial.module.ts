import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  exports:[
    MatSliderModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule
  ],
  imports: [
    CommonModule
  ],
  providers:[
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,useValue:{appearance: 'outline'}}
  ]
})
export class NgmaterialModule { }
