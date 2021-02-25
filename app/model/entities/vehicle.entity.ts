import mongoose from 'mongoose';


export interface IVehicle {
  name : string;
  vehicle_model : string;
  vehicle_class : string;
  manufacturer : string;
  length : string;
  cost_in_credits : string;
  crew: string;
  passengers : string;
  max_atmospheric_speed : string;
  cargo_capacity:  string;
  consumables : string; 
}

export interface VehicleDocument extends IVehicle,mongoose.Document{

}

const vehicleSchema = new mongoose.Schema({
    name: String,
    vehicleModel : String,
    vehicleClass : String,
    manufacturer : String,
    length : String,
    costInCredtis : String,
    crew : String,
    passengers : String,
    maxAtmosphericSpeed : String,
    cargoCapacity : String,
    consumables : String
  });
  
  // Note: OverwriteModelError: Cannot overwrite `Books` model once compiled. error
  export const vehicles = (mongoose.models.vehicles ||
  mongoose.model<VehicleDocument>('vehicles', vehicleSchema)
  );