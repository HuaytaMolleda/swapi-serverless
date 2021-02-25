export class PlanetSpanish{
    nombre : string;
    diametro : string;
    periodo_rotacional : string;
    periodo_orbital : string;
    gravedad : string;
    poblacion : string;
    clima : string;
    terreno : string;
    superficie_maritima : string;
    residentes : string;
    peliculas :[string];
    url : string;
    creado: string;
    editado: string;

    constructor( film :Partial<PlanetSpanish>){
        Object.assign(this,film)
      }
}