import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoService } from './services/alumno.service';
import { ServiceInterceptor } from './services/service.interceptor';
import { AlumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { AlumnoListComponent } from './components/alumno-main/alumno-list/alumno-list.component';
import { AlumnoFormComponent } from './components/alumno-main/alumno-form/alumno-form.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { MasmasPipe } from './shared/pipes/masmas.pipe';
import { SexdescPipe } from './shared/pipes/sexdesc.pipe';
import { MateriaFormComponent } from './components/materia-form/materia-form.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { CarreraMainComponent } from './components/carrera-main/carrera-main.component';
import { CalificacionFormComponent } from './components/calificacion-form/calificacion-form.component';
import { AlumnoSearchComponent } from './components/alumno-search/alumno-search.component';
import { AporteFormComponent } from './components/aporte-form/aporte-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoMainComponent,
    AlumnoListComponent,
    AlumnoFormComponent,
    AlumnoCardComponent,
    AporteFormComponent,   
    MasmasPipe,
    SexdescPipe,
    MateriaFormComponent,
    MatriculaFormComponent,
    CarreraMainComponent,
    AlumnoSearchComponent,
    CalificacionFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    AlumnoService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue : 'es-EC'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
