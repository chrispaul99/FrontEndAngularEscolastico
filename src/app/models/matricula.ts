import { Materia } from './materia';
import { Alumno } from './alumno';

export class Matricula {
    idmatricula : number;
    fecha: string;
    tipo : string = "P";
    costo : number;
    idMateria:Number;
    idAlumno:Number;
    Materia:Materia;
    Alumno:Alumno;
}
