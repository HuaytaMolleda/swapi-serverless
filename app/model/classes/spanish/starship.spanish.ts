export class StarshipSpanish{
    nombre : string;
    modelo : string;
    clase_de_nave : string;
    fabricante : string;
    costo_en_creditos : string;
    tamanio : string;
    tripulacion : string;
    pasajeros : string;
    velocidad_atmosferica_maxima : string;
    hiperpropulsion : string;
    mglt : string;
    capacidad : string;
    consumibles : string;
    constructor( film :Partial<StarshipSpanish>){
        Object.assign(this,film)
      }
}