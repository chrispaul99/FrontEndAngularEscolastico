export class Carrera {
    idCarrera: number;
    nombre: string;
    // tslint:disable-next-line: variable-name
    fecha_creacion: string;
    director: string;
    // tslint:disable-next-line: variable-name
    creditos_totales: number;
    tipo: string;
    descripcion: string;
    mision: string;
    vision: string;
    modalidad: string = "P";
    estatus: string = "V";
    duracion: number;
    // tslint:disable-next-line: variable-name
    resolucion_ces: string;
    // tslint:disable-next-line: variable-name
    semanas_periodo: number;
    requisitos: string;
    // tslint:disable-next-line: variable-name
    escenarios_labo: string;
    // tslint:disable-next-line: variable-name
    objeto_estudio: string;
}
