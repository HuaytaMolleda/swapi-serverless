
import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';

import {  SwapiController } from './controller/swapi.controller';
import {  SwapiService  } from "./service/swapi.service";
import { films as FilmModel } from "./model/entities";
import { FilmController } from './controller/film.controller';
import { FilmService } from './service/film.service';

const dotenvPath : string = path.join(__dirname, '../', 'config/.env');
dotenv.config({
  path: dotenvPath,
});




const swapiController : SwapiController  = new SwapiController(new SwapiService());
const filmController: FilmController = new FilmController(new FilmService(FilmModel))


export const listSwapiItems  :  Handler = (event : any) => swapiController.listSwapiItems(event);
export const findSwapiItem   :  Handler = (event : any) => swapiController.findSwapiItem(event); 
export const create          :  Handler = (event : any, context : Context) => filmController.create(event,context);
export const list            :  Handler = () => filmController.list();

