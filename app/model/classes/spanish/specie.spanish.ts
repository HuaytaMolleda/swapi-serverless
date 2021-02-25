export class SpecieSpanish{
    nombre : string;
    clasificacion : string;
    designacion : string;
    altura_promedio:string;
    tiempo_de_vida_promedio : string;
    color_de_ojos : string;
    color_de_cabello : string;
    color_de_piel : string;
    idioma : string;
    planeta_natal : string;
    constructor( film :Partial<SpecieSpanish>){
        Object.assign(this,film)
      }
}