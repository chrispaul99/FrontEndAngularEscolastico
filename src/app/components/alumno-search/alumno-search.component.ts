import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alumno-search',
  templateUrl: './alumno-search.component.html',
  styleUrls: ['./alumno-search.component.css']
})
export class AlumnoSearchComponent implements OnInit {

  faCheck = faCheck;

  alumnos : Alumno[];
  @Output() alumnoFound = new EventEmitter<Alumno>();

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
  }

  searchAlumno($event) : void {
    console.info($event.target.value);
    this.alumnoService.search($event.target.value).subscribe(
      result => this.alumnos = result
    )
  }

  selectAlumno(id:number):void{
    this.alumnoService.retrieve(id).subscribe(result => this.alumnoFound.emit(result));
  }

}
