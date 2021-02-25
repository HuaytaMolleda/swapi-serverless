import { FilmDocument  } from "../model/entities";
import { Connection, Model } from "mongoose";
import { FilmDTO } from "../model/dto/film.dto";
import { CreateFilmDTO } from "../model/dto/create.dto";
import { MappingUtil } from "../utils/mapping.util";
import { CharacterEnum } from "../model/enums/character.enum";
import { FilmSpanish } from "../model/classes/spanish/film.spanish";
import mongodbConnection from "../database/mongo.database";


export class FilmService{


    filmDocument : Model<FilmDocument> 

    constructor( filmDocument : Model<FilmDocument>){
        this.filmDocument = filmDocument
    }

  async create (  createFilmDTO :   CreateFilmDTO )  : Promise<FilmSpanish |  any>{

    const connection : Connection  =   (await mongodbConnection).connection
    
    
    const newFilm : FilmDocument    = new this.filmDocument()

    newFilm.director = createFilmDTO.director ? createFilmDTO.director : null
    newFilm.episode_id = createFilmDTO.episode_id  ? createFilmDTO.episode_id : null
    newFilm.title = createFilmDTO.title ? createFilmDTO.title : null
    newFilm.producer = createFilmDTO.producer ? createFilmDTO.producer : null
    newFilm.openning_crawl = createFilmDTO.openning_crawl ? createFilmDTO.openning_crawl : null
    newFilm.release_date = createFilmDTO.release_date ? createFilmDTO.release_date : null


    const filmSpanish : FilmSpanish  | any =  await  newFilm.save().then(
        (filmDocument: FilmDocument) => {
            return MappingUtil.parseFilmDocumentToDto(filmDocument)
        }).then(( filmDTO : FilmDTO) => {
            return MappingUtil.parseSingleItem(CharacterEnum.FILM,filmDTO)
        })

    
    await connection.close()

    return filmSpanish;
  }

  async list () : Promise<Array<FilmSpanish | any>> {


    const connection : Connection  =   (await mongodbConnection).connection


    const filmsInSpanish : Array<FilmSpanish | any> =  await this.filmDocument.find().exec().then(
        (films : FilmDocument[] ) => {
            
            
            return MappingUtil.parseFilmDocumentArrayToArrayDto(films)
        }
    ).then(( filmsDto : FilmDTO[]) => {
        return MappingUtil.parseArrayByModel(CharacterEnum.FILM,filmsDto)
    })


    await connection.close();

    return filmsInSpanish;
  }


  
}