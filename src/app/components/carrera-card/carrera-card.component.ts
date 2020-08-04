import { Component, OnInit } from '@angular/core';
import { faUser, faIdCard, faCalendar, faMapMarked, faGenderless, faSchool, faList, faArchway, faSortNumericUp, faStar, faCalendarWeek, faCalendarDay, faTextHeight, faAudioDescription, faComment, faLightbulb, faFileArchive, faListUl, faNetworkWired, faBalanceScale, faBook } from '@fortawesome/free-solid-svg-icons';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ActivatedRoute } from '@angular/router';
import { Carrera } from 'src/app/models/carrera';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-carrera-card',
  templateUrl: './carrera-card.component.html',
  styleUrls: ['./carrera-card.component.css']
})
export class CarreraCardComponent implements OnInit {

  faUser = faUser;
  faIdCard = faIdCard;
  faCalendar = faCalendar;
  faMapMarked = faMapMarked;
  faGenderless = faGenderless;
  facarrera = faSchool;
  famodalidad = faList;
  ftipo = faArchway;
  facreditos = faSortNumericUp;
  festatus = faStar;
  fsemanas = faCalendarWeek;
  ffecha = faCalendarDay;
  ftexto = faTextHeight;
  fmision = faComment;
  fvision = faLightbulb;
  fresolucion = faFileArchive;
  frequisitos = faListUl;
  flaboral = faBalanceScale;
  fobjetivo = faBook;

  carrera: Carrera;

  constructor(private carreraService: CarreraService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id){
          this.carreraService.retrieve(params.id).subscribe(
            result => this.carrera = result
          );
        }
      }
    );
  }

}
