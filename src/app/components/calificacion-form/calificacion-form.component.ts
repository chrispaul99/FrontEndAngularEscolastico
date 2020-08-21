import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Matricula } from 'src/app/models/matricula';
import { MatriculaService } from 'src/app/services/matricula.service';
import { faCheck, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Calificacion } from 'src/app/models/calificacion';
import { CalificacionService } from 'src/app/services/calificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calificacion-form',
  templateUrl: './calificacion-form.component.html',
  styleUrls: ['./calificacion-form.component.css']
})
export class CalificacionFormComponent implements OnInit {

  faCheck = faCheck;
  faPlusSquare = faPlusSquare;

  nota : number = 0;
  alumno : Alumno;  
  calificacion : Calificacion =  new Calificacion();
  matriculas : Matricula[];

  form: FormGroup;

  constructor(private calificacionService: CalificacionService, 
    private matriculaService: MatriculaService,
    private formBuilder: FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {    
    this.initForm();
  }

  initForm() : void {
    this.form = this.formBuilder.group({
      unidad: ['', [Validators.required]],            
    });  
  }

  listMatriculas() : void {
    if(this.alumno === undefined) return;
    this.matriculaService.list(this.alumno.idalumno).subscribe(
      result => this.matriculas = result
    );
  }

  setAlumno($event):void{
    this.alumno = $event;
    this.listMatriculas();
  }

  selectMatricula(m : Matricula):void{    
    this.calificacion.Matricula = m;
    this.calificacion.idMatricula = m.idmatricula;
  }

  onSubmit() : void {
    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }
    this.calificacion.Matricula = null;
    console.log(this.calificacion);
    this.calificacionService.save(this.calificacion).subscribe(result => {
      console.log(result);
      this.router.navigate(['/']);
    });
  }

  onReset() : void {   
    this.form.reset();       
    this.calificacion = new Calificacion();
  }

  addAporte($event){
    this.calificacion.Aporte.push($event);
    this.calcNota();
  }

  calcNota(): void{
    this.nota = 0;
    this.calificacion.Aporte.forEach((x) => {
      let puntaje = (x.valor * x.ponderado) / 20;
      this.nota = this.nota + puntaje;
    });

  }


}
