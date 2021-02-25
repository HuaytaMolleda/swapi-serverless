import mongoose from 'mongoose';

export interface IPeople{
    name  : string;
    birth_year : string;
    eye_color : string;
    gender : string;
    hair_color : string;
    height : string;
    homeworld : string;

}



export interface PeopleDocument extends IPeople, mongoose.Document{

}
  
const peopleSchema = new mongoose.Schema({
    name: String,
    id: { type: Number, index: true, unique: true },
    description: String,
    createdAt: { type: Date, default: Date.now },
  });
  
  export const people = (mongoose.models.persons ||
  mongoose.model<PeopleDocument>('persons', peopleSchema)
  );