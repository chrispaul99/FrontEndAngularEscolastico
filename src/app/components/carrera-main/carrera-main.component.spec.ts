import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraMainComponent } from './carrera-main.component';

describe('CarreraMainComponent', () => {
  let component: CarreraMainComponent;
  let fixture: ComponentFixture<CarreraMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarreraMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreraMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
