export class PeopleSpanish{
    nombre : string
    fecha_de_nacimiento : string
    color_de_ojos : string
    genero : string
    color_de_cabello : string
    altura  : string
    mundo_natal : string;
    constructor( film :Partial<PeopleSpanish>){
        Object.assign(this,film)
      }
}