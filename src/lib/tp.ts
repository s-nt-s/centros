export type Distancias = {
    latitud: number;
    longitud: number;
    centro: Map<number, number>;
};

export type EstadoCentros = {
    seleccionados: Centro[];
    descartados: Centro[];
    hidden: Centro[];
    shown: Centro[];
    distancias: Distancias | null;
};