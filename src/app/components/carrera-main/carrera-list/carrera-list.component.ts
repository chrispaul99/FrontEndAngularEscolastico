import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { faListAlt, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Carrera } from 'src/app/models/carrera';
import swal from 'sweetalert2';
import { CarreraService } from 'src/app/services/carrera.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrera-list',
  templateUrl: './carrera-list.component.html',
  styleUrls: ['./carrera-list.component.css']
})
export class CarreraListComponent implements OnInit {

  faListAlt = faListAlt;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  carreras: Carrera[];
  @Output() carreraToEdit = new EventEmitter<Carrera>();
  @Input() flagToReload;
  // tslint:disable-next-line: ban-types
  @Output() reloadComplete = new EventEmitter<Boolean>();

  constructor(private router: Router, private carreraService: CarreraService) { }

  ngOnInit(): void {
    this.list();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.flagToReload.currentValue){
      if (this.flagToReload){
        this.list();
      }
    }
  }


  update(c: Carrera): void {
    console.log(c);
    this.carreraToEdit.emit(c);
  }

  delete(c: Carrera): void {
    swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El registro de " + c.nombre + " "+ this.modalidad(c.modalidad)  + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.carreraService.delete(c).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          result => console.log(result)
        );
      }
      this.list();
    });
  }



  list(): void {
    this.carreraService.list().subscribe(result => {
      this.carreras = result;
      this.reloadComplete.emit(true);
    });
  }
  modalidad(value: string):string{
    if (value === "P")
      return "Presencial";
    if (value === "S")
      return "Semipresencial";
    if (value === "D")
      return "Dual";
    if (value === "E")
      return "En linea";
    if (value === "A")
      return "A distancia";
  }
}
