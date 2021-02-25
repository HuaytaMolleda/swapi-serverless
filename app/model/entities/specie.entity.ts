
import mongoose from 'mongoose';



export interface ISpecie {
  name : string;
  classification : string;
  designation : string;
  average_height:string;
  average_lifespan : string;
  eye_colours : string;
  hair_colors : string;
  skin_colors : string;
  language : string;
  homeworld : string;
}

export interface SpecieDocument extends mongoose.Document, ISpecie  {

} 
  const specieSchema = new mongoose.Schema({
    name: String,
    id: { type: Number, index: true, unique: true },
    description: String,
    createdAt: { type: Date, default: Date.now },
  });
  
  // Note: OverwriteModelError: Cannot overwrite `Books` model once compiled. error
  export const species = (mongoose.models.species ||
  mongoose.model<SpecieDocument>('species', specieSchema)
  );