import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoSearchComponent } from './alumno-search.component';

describe('AlumnoSearchComponent', () => {
  let component: AlumnoSearchComponent;
  let fixture: ComponentFixture<AlumnoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
