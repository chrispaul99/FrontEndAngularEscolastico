import { Component, OnInit } from '@angular/core';
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Alumno } from 'src/app/models/alumno';
import { Materia } from 'src/app/models/materia';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MateriaService } from 'src/app/services/materia.service';
import { Matricula } from 'src/app/models/matricula';
import { NumberValueAccessor, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatriculaService } from '../../services/matricula.service';

@Component({
  selector: 'app-matricula-form',
  templateUrl: './matricula-form.component.html',
  styleUrls: ['./matricula-form.component.css']
})
export class MatriculaFormComponent implements OnInit {

  faSearch = faSearch;
  faCheck = faCheck;

  alumnos: Alumno[];
  alumno: Alumno;

  materias: Materia[];
  materia: Materia;
  matriculas: Matricula = new Matricula();

  form: FormGroup;
  constructor(private alumnoService: AlumnoService, private materiaService: MateriaService, private formBuilder: FormBuilder, private matriculaService: MatriculaService) { }

  ngOnInit(): void {
    this.listMaterias();
    this.initForm();
  }
  listMaterias(): void{
    this.materiaService.list().subscribe(result => {
      this.materias = result;
    });
  }
  initForm(): void{
    this.form = this.formBuilder.group({
      tipo: ['', [Validators.required]],
    });
  }
  searchAlumno($event) : void {
    console.info($event.target.value);
    this.alumnoService.search($event.target.value).subscribe(
      result => this.alumnos = result
    )
  }

  selectAlumno(id:number):void{
    this.alumnoService.retrieve(id).subscribe(result => this.alumno = result);
  }

  selectMateria(a:Materia):void{
    this.materia = a;
  }
  onSubmit(): void {
    if (this.form.invalid){
      console.error('Error en formulario');
      return;
    }
    this.matriculas.alumno = this.alumno;
    this.matriculas.materia = this.materia;
    console.log(this.matriculas);
    this.matriculaService.save(this.matriculas).subscribe(result => {
      console.log(result);
      this.matriculas = new Matricula();
      this.alumno = undefined;
      this.materia = undefined;
    });
  }

  onReset(): void {
    this.form.reset();
    this.matriculas = null;
    this.materia = undefined;
    this.alumno = undefined;
  }
}
