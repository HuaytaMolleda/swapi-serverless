import { TimestampInterface } from "../interfaces/timestamp.interface";

export class SpecieDTO implements TimestampInterface{
  
    name : string;
    classification : string;
    designation : string;
    average_height:string;
    average_lifespan : string;
    eye_color : string;
    hair_color : string;
    skin_color : string;
    language : string;
    homeworld : string;
    people : [string];
    films : [string];
    url : string;
    created: string;
    edited: string;
  
  
    constructor(specie : Partial<SpecieDTO>){
      Object.assign(this,specie)
    }
  
  }