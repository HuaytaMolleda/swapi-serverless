
import mongoose from 'mongoose';

export interface IPlanet {
  name : string;
  diameter : string;
  rotation_period : string;
  orbital_period : string;
  gravity : string;
  population : string;
  climate : string;
  terrain : string;
  surface_water : string;
  residents : string;
}

export interface PlanetDocument extends mongoose.Document, IPlanet {

}
  
  const planetSchema = new mongoose.Schema({
    name: String,
    id: { type: Number, index: true, unique: true },
    description: String,
    createdAt: { type: Date, default: Date.now },
  });
  
  export const planets = (mongoose.models.planets ||
  mongoose.model<PlanetDocument>('planets', planetSchema)
  );