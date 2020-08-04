import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/models/carrera';

@Component({
  selector: 'app-carrera-main',
  templateUrl: './carrera-main.component.html',
  styleUrls: ['./carrera-main.component.css']
})
export class CarreraMainComponent implements OnInit {

mainCarrera: Carrera;

mainTitle: string;
mainReload: boolean;

constructor() { }

ngOnInit(): void {
this.onInit();
}

onInit(): void {
this.mainCarrera = new Carrera();
this.mainTitle = "Registro de una nueva Carrera";
this.mainReload = false;
}

toUpdate($event): void{
this.mainCarrera = $event;
this.mainCarrera.fecha_creacion = this.mainCarrera.fecha_creacion.replace("T00:00:00", "");
console.log(this.mainCarrera);
this.mainTitle = "Editando registro de " + $event.nombres + " " + $event.apellidos;
}

toReload($event): void {
this.onInit();
console.log($event);
this.mainReload = $event;
}

reloadDone($event){
this.mainReload = !$event;
}

}
