import { Materia } from './materia';
import { Alumno } from './alumno';

export class Matricula {
    idmatricula: number;
    fecha: string;
    tipo: string = "P";
    costo: number;
    materia: Materia;
    alumno: Alumno;
}
