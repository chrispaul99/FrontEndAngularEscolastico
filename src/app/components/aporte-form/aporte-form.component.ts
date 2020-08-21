import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Aporte } from 'src/app/models/aporte';

@Component({
  selector: 'app-aporte-form',
  templateUrl: './aporte-form.component.html',
  styleUrls: ['./aporte-form.component.css']
})
export class AporteFormComponent implements OnInit {

  form: FormGroup;
  @Output() aporteAdded = new EventEmitter<Aporte>();
  
  constructor(private formBuilder: FormBuilder) { }

  get f(){
    return this.form.controls;
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],            
      valor: ['', [Validators.required]],            
      ponderado: ['', [Validators.required]]               
    });  
  }

  onSubmit(){
    if(this.form.invalid){
      return;
    }
    const aporte : Aporte = this.form.value;
    this.aporteAdded.emit(aporte);
  }

  onReset(){
    this.form.reset();
  }

}
