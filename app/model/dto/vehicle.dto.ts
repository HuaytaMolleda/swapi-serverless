import { TimestampInterface } from "../interfaces/timestamp.interface";

export class VehicleDTO implements TimestampInterface{

    name : string;
    model : string;
    vehicle_class : string;
    manufacturer : string;
    length : string;
    cost_in_credits : string;
    crew: string;
    passengers : string;
    max_atmospheric_speed : string;
    cargo_capacity:  string;
    consumables : string;
    films : [string];
    pilots : [string];
    url : string;  
  
    constructor(vehicle : Partial<VehicleDTO>){
      Object.assign(this,vehicle)
    }
    created: string;
    edited: string;
  }