import { Component, OnInit } from '@angular/core';
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Alumno } from 'src/app/models/alumno';
import { Materia } from 'src/app/models/materia';
import { MateriaService } from 'src/app/services/materia.service';
import { Matricula } from 'src/app/models/matricula';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-matricula-form',
  templateUrl: './matricula-form.component.html',
  styleUrls: ['./matricula-form.component.css']
})
export class MatriculaFormComponent implements OnInit {

  faSearch = faSearch;
  faCheck = faCheck;

  
  materias : Materia[];

  alumno : Alumno;
  materia : Materia;  
  matricula : Matricula = new Matricula();

  form: FormGroup;

  constructor(private materiaService : MateriaService,
    private matriculaService: MatriculaService, 
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.listMaterias();
    this.initForm();
  }

  initForm() : void {
    this.form = this.formBuilder.group({
      tipo: ['', [Validators.required]],            
    });  
  }

  listMaterias()  : void {
    this.materiaService.list().subscribe(result=>{
      console.log(result);
      this.materias = result;            
    });
  }

  selectMateria(m : Materia):void{
    this.materia = m;
  }

  setAlumno($event):void{
    this.alumno = $event;
  }

  onSubmit() : void {
    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    this.matricula.idAlumno = this.alumno.idalumno;
    this.matricula.idMateria = this.materia.idmateria;
    console.log(this.matricula);
    this.matriculaService.save(this.matricula).subscribe(result => {
      console.log(result);
      this.matricula = new Matricula();      
      this.materia = new Materia();
    });
   
  }

  onReset() : void {   
    this.form.reset();   
    this.materia = new Materia();
    this.alumno = new Alumno();
  }




}
