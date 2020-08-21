import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AporteFormComponent } from './aporte-form.component';

describe('AporteFormComponent', () => {
  let component: AporteFormComponent;
  let fixture: ComponentFixture<AporteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AporteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AporteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
