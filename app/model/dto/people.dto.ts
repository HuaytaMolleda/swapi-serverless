import { TimestampInterface } from "../interfaces/timestamp.interface";

export class PeopleDTO implements TimestampInterface{

    name  : string;
    birth_year : string;
    eye_color : string;
    gender : string;
    hair_color : string;
    height : string;
    homeworld : string;
    films   : [string];
    species  : [string];
    starships : [string];
    vehicles : [string];
    url : string;
    created: string;
    edited: string;
  
  
    constructor( people :Partial<PeopleDTO>){
      Object.assign(this,people)
    }
    
  
  }