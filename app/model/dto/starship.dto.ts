import { TimestampInterface } from "../interfaces/timestamp.interface";

export class StarshipDTO implements TimestampInterface{
    name : string;
    model : string;
    starship_class : string;
    manufacturer : string;
    cost_in_credits : string;
    length : string;
    crew : string;
    passengers : string;
    max_atmosphering_speed : string;
    hyperdrive_rating : string;
    MGLT : string;
    cargo_capacity : string;
    consumables : string;
    films : [string];
    pilots : [string];
    url : string;
   
  
  
  
    constructor( starship :Partial<StarshipDTO>){
      Object.assign(this,starship)
    }
    created: string;
    edited: string;
  }