import mongoose from 'mongoose';

export interface IFilm {
  title : string;
  episode_id : number;
  openning_crawl : string;
  director : string;
  producer : string;
  release_date : string;

}

export interface FilmDocument extends mongoose.Document, IFilm {

}
  
  const filmsSchema = new mongoose.Schema({
    title : String,
    episode_id : Number,
    openning_crawl : String,
    director : String,
    producer : String,

  },{
    timestamps : true,
    collection : 'films'
  });
  
  export const films = (mongoose.models.films ||
  mongoose.model<FilmDocument>('films', filmsSchema)
  );