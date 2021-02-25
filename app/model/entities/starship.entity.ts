
import mongoose from 'mongoose';

export interface IStarship {
  name : string;
  starship_model : string;
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
   
}

export interface StarshipDocument extends mongoose.Document, IStarship  {

}

  const starshipSchema = new mongoose.Schema({
    name: String,
    id: { type: Number, index: true, unique: true },
    description: String,
    createdAt: { type: Date, default: Date.now },
  });
  
  // Note: OverwriteModelError: Cannot overwrite `Books` model once compiled. error
  export const starships = (mongoose.models.starships ||
  mongoose.model<StarshipDocument>('starships', starshipSchema)
  );