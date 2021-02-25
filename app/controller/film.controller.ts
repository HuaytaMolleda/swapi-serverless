
import { Context } from "aws-lambda";
import { FilmSpanish } from "../model/classes/spanish/film.spanish";
import { CreateFilmDTO } from "../model/dto/create.dto";
import { FilmService } from "../service/film.service";
import { MessageUtil } from "../utils/message";

export class FilmController{


    filmService : FilmService
    constructor(filmService : FilmService){
        this.filmService = filmService
    }


    async create (event : any , context : Context)  {

        console.log('function name ---> ', context.functionName);

        const createFilmDTO: CreateFilmDTO = JSON.parse(event.body);
        
        
        try {

          const filmSpanish : FilmSpanish  =   await this.filmService.create(createFilmDTO)
          
          return MessageUtil.success(filmSpanish)
        } catch (error) {        
            return  MessageUtil.error(error.code, error.message)
        }

    }

    async list () {
        try {
            const filmsInSpanish : Array<FilmSpanish> = await this.filmService.list()

            return MessageUtil.success(filmsInSpanish)

        } catch (error) {
            return MessageUtil.error(error.code,error.message)
        }
    }

}