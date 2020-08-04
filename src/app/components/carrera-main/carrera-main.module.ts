import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarreraMainRoutingModule } from './carrera-main-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarreraFormComponent } from './carrera-form/carrera-form.component';
import { CarreraListComponent } from './carrera-list/carrera-list.component';
import { CarreraCardComponent } from '../carrera-card/carrera-card.component';
import { EstatusPipe } from 'src/app/shared/pipes/estatus.pipe';
import { ModalidadPipe } from 'src/app/shared/pipes/modalidad.pipe';


@NgModule({
  declarations: [CarreraFormComponent, CarreraListComponent, CarreraCardComponent, EstatusPipe, ModalidadPipe],
  imports: [
    CommonModule,
    CarreraMainRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,

  ]
})
export class CarreraMainModule { }
