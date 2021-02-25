export class VehicleSpanish{
    nombre : string;
    modelo : string;
    clase_de_vehiculo : string;
    fabricante : string;
    tamanio : string;
    costo_en_creditos : string;
    tripulacion: string;
    pasajeros : string;
    velocidad_atmosferica_maxima : string;
    capacidad:  string;
    consumibles : string; 
    
    constructor( film :Partial<VehicleSpanish>){
        Object.assign(this,film)
      }
}