export interface Especie {
    id: number;
    nombre_espanol: string;
    nombre_cientifico: string;
    id_zona: number;
    descripcion: string;
    estado_conservacion: string;
    zona_detalles: ZonaDetalles;
    habitats: Habitat[] | [];
}

export interface ZonaDetalles {
    id:        number;
    nombre:    string;
    extension: string;
    capacidad: number;
}
