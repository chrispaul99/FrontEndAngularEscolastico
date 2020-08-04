import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faCalendar, faMapMarkedAlt, faGenderless, faMapMarked, faSchool, faList, faArchway, faSortNumericUp, faStar, faCalendarWeek, faCalendarDay, faTextHeight, faComment, faLightbulb, faFileArchive, faListUl, faBalanceScale, faBook } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Carrera } from '../../../models/carrera';
import { CarreraService } from 'src/app/services/carrera.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrera-form',
  templateUrl: './carrera-form.component.html',
  styleUrls: ['./carrera-form.component.css']
})
export class CarreraFormComponent implements OnInit {
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
  fatimes = faTimes;
  faSave = faSave;

  carrera: Carrera;
  title: string;
  // tslint:disable-next-line: ban-types
  @Output() flagToReload = new EventEmitter<Boolean>();

  form: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private carreraService: CarreraService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id){
          this.carreraService.retrieve(params.id).subscribe(
            result =>{
              this.carrera = result;
              this.carrera.fecha_creacion = this.carrera.fecha_creacion.replace('T00:00:00', '');
            }
          );
          this.title = "Actualizar Carrera";
        }
        else{
          this.title = "Añadir nueva Carrera";
          this.carrera = new Carrera();
        }
      }
    );
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      fecha_creacion: ['', [Validators.required]],
      director: ['', [Validators.required]],
      creditos_totales: ['', [Validators.required]],
      estatus: ['',  [Validators.maxLength(1)]],
      descripcion: ['', [Validators.required]],
      duracion:  ['', [Validators.required]],
      mision: ['', [Validators.required]],
      vision: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      modalidad: ['', [Validators.maxLength(1)]],
      resolucion_ces: ['', [Validators.required]],
      semanas_periodo: ['', [Validators.required]],
      requisitos: ['', [Validators.required]],
      escenarios_labo: ['', [Validators.required]],
      objeto_estudio: ['', [Validators.required]],
    });
  }

  get f(){
    return this.form.controls;
  }

  onSubmit(): void {

    this.submitted = true;

    if (this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    this.carreraService.save(this.carrera).subscribe(
      result => {
        this.submitted = false;
        console.log(result);
        this.flagToReload.emit(true);
      }
    );
    setTimeout(() => {
      this.router.navigate(['/carreras']);
    }, 2000);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.carrera = new Carrera();
    this.router.navigate(['/carreras']);
  }

}
