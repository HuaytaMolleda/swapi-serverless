import { TimestampInterface } from "../interfaces/timestamp.interface";

export class FilmDTO implements TimestampInterface{

    title : string;
    episode_id : number;
    openning_crawl : string;
    director : string;
    producer : string;
    release_date : string;
    species : [string];
    starships : [string];
    vehicles : [string];
    characters :[string];
    planets : [string];
    url : string;
    
  
  
    constructor( film :Partial<FilmDTO>){
      Object.assign(this,film)
    }
    created: string;
    edited: string;
  }