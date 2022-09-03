import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogNuevoCursoComponent } from './dailog-nuevo-curso.component';

describe('DailogNuevoCursoComponent', () => {
  let component: DailogNuevoCursoComponent;
  let fixture: ComponentFixture<DailogNuevoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailogNuevoCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailogNuevoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
