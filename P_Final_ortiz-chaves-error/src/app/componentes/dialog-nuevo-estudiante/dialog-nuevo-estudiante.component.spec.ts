import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNuevoEstudianteComponent } from './dialog-nuevo-estudiante.component';

describe('DialogNuevoEstudianteComponent', () => {
  let component: DialogNuevoEstudianteComponent;
  let fixture: ComponentFixture<DialogNuevoEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNuevoEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNuevoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
