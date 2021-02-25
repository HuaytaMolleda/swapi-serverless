import { FilmSpanish } from "../model/classes/spanish/film.spanish";
import { PeopleSpanish } from "../model/classes/spanish/people.spanish";
import { PlanetSpanish } from "../model/classes/spanish/planet.spanish";
import { SpecieSpanish } from "../model/classes/spanish/specie.spanish";
import { StarshipSpanish } from "../model/classes/spanish/starship.spanish";
import { VehicleSpanish } from "../model/classes/spanish/vehicle.spanish";
import { FilmDTO } from "../model/dto/film.dto";
import { PeopleDTO } from "../model/dto/people.dto";
import { PlanetDTO } from "../model/dto/planet.dto";
import { SpecieDTO } from "../model/dto/specie.dto";
import { StarshipDTO } from "../model/dto/starship.dto";
import { VehicleDTO } from "../model/dto/vehicle.dto";
import { FilmDocument } from "../model/entities";
import { CharacterEnum } from "../model/enums/character.enum";

export class MappingUtil {




    /**
     * mapPeople
     */
        static mapPeople( createPeopleDTO : PeopleDTO)  : PeopleSpanish  {
            return new PeopleSpanish({
                altura : createPeopleDTO.height ? createPeopleDTO.height  : null,
                color_de_cabello : createPeopleDTO.hair_color ? createPeopleDTO.hair_color  : null,
                color_de_ojos : createPeopleDTO.eye_color ? createPeopleDTO.eye_color : null,
                fecha_de_nacimiento : createPeopleDTO.birth_year ? createPeopleDTO.birth_year : null,
                genero: createPeopleDTO.gender ? createPeopleDTO.gender : null,
                mundo_natal : createPeopleDTO.homeworld ? createPeopleDTO.homeworld : null,
                nombre : createPeopleDTO.name  ? createPeopleDTO.name : null
            })
        
    }

    /**
     * mapFilm
     */
        static mapFilm(createFilmDTO : FilmDTO) : FilmSpanish {
            return new FilmSpanish({
                director : createFilmDTO.director ? createFilmDTO.director : null,
                fecha_de_lanzamiento : createFilmDTO.release_date ? createFilmDTO.release_date : null,
                id_episodio : createFilmDTO.episode_id ? createFilmDTO.episode_id : null,
                productor : createFilmDTO.producer ? createFilmDTO.producer : null,
                titulo : createFilmDTO.title ? createFilmDTO.title : null,
                openning_crawl : createFilmDTO.openning_crawl  ?  createFilmDTO.openning_crawl : null
            })
    }

    /**
     * mapPlanet
     */
        static mapPlanet(createPlanetDTO : PlanetDTO) : PlanetSpanish {
            return new PlanetSpanish({
                clima : createPlanetDTO.climate ,
                creado : createPlanetDTO.created,
                diametro : createPlanetDTO.diameter,
                editado : createPlanetDTO.edited,
                gravedad : createPlanetDTO.gravity,
                nombre : createPlanetDTO.name,
                peliculas : createPlanetDTO.films,
                poblacion : createPlanetDTO.population,
                periodo_orbital : createPlanetDTO.orbital_period,
                periodo_rotacional : createPlanetDTO.rotation_period,
                superficie_maritima : createPlanetDTO.surface_water,
                residentes : createPlanetDTO.residents,
                terreno : createPlanetDTO.terrain,
                url : createPlanetDTO.url
            })
    }

    /**
     * mapSpecie
     */
        static mapSpecie(createSpecieDTO : SpecieDTO) : SpecieSpanish {
            return new SpecieSpanish({
                altura_promedio : createSpecieDTO.average_height,
                tiempo_de_vida_promedio : createSpecieDTO.average_lifespan,
                clasificacion : createSpecieDTO.classification,
                color_de_cabello : createSpecieDTO.hair_color,
                color_de_ojos : createSpecieDTO.eye_color,
                color_de_piel : createSpecieDTO.skin_color,
                designacion : createSpecieDTO.designation,
                idioma : createSpecieDTO.language,
                nombre : createSpecieDTO.name,
                planeta_natal: createSpecieDTO.homeworld
            })
        }

    /**
     * mapStarship
     */
        static mapStarship(  createSpecieDTO : StarshipDTO)  : StarshipSpanish{
            return new StarshipSpanish({
                capacidad : createSpecieDTO.cargo_capacity,
                clase_de_nave : createSpecieDTO.starship_class,
                consumibles : createSpecieDTO.consumables,
                costo_en_creditos : createSpecieDTO.cost_in_credits,
                hiperpropulsion : createSpecieDTO.hyperdrive_rating,
                fabricante : createSpecieDTO.manufacturer,
                mglt : createSpecieDTO.MGLT,
                modelo : createSpecieDTO.model,
                nombre : createSpecieDTO.name,
                pasajeros : createSpecieDTO.passengers,
                tamanio : createSpecieDTO.length,
                tripulacion : createSpecieDTO.crew,
                velocidad_atmosferica_maxima : createSpecieDTO.max_atmosphering_speed
            })
        }

    /**
     * mapVehicle
     */
        static mapVehicle( createVehicleDTO : VehicleDTO) : VehicleSpanish {
            return new VehicleSpanish({
                capacidad : createVehicleDTO.cargo_capacity,
                clase_de_vehiculo : createVehicleDTO.vehicle_class,
                consumibles : createVehicleDTO.consumables,
                costo_en_creditos : createVehicleDTO.cost_in_credits,
                fabricante :createVehicleDTO.manufacturer,
                modelo : createVehicleDTO.model,
                nombre : createVehicleDTO.name,
                pasajeros : createVehicleDTO.passengers,
                tamanio : createVehicleDTO.length,
                tripulacion : createVehicleDTO.crew,
                velocidad_atmosferica_maxima : createVehicleDTO.max_atmospheric_speed


            })
        }


    /**
     * parseSingleItem
     */
    public static parseSingleItem(model : string, item : any) : VehicleSpanish | FilmSpanish | PeopleSpanish | PlanetSpanish | StarshipSpanish |SpecieSpanish {
        switch(model){
            case CharacterEnum.VEHICLES : {
                return this.mapVehicle(item)
            }
            case CharacterEnum.FILM : {
                return this.mapFilm(item)
            }
            case CharacterEnum.PEOPLE : {
                return this.mapPeople(item)
            }
            case CharacterEnum.PLANET : {
                return this.mapPlanet(item)
            }
            case CharacterEnum.STARSHIP : {
                return this.mapStarship(item)
            }
            case CharacterEnum.SPECIE : {
                return this.mapSpecie(item)
            }
        }
    }

    public static parseArrayByModel(model : string, list : Array<any>) : Array<VehicleSpanish | FilmSpanish | PeopleSpanish | PlanetSpanish | StarshipSpanish | SpecieSpanish>{
        switch(model){
            case CharacterEnum.VEHICLES : {
                return list.map((vehicle : VehicleDTO) => {
                    return this.mapVehicle(vehicle)
                })
            } 
            case CharacterEnum.FILM : {
                return list.map((film : FilmDTO)=> {
                    return this.mapFilm(film)
                })}
            case CharacterEnum.PEOPLE : {
                return list.map((people : PeopleDTO) => {
                    return this.mapPeople(people)
                })
                }
            case CharacterEnum.PLANET : {
                return list.map((planet : PlanetDTO) => {
                    return this.mapPlanet(planet)
                })
                }
            case CharacterEnum.STARSHIP : {
                return list.map((starship : StarshipDTO)=>{
                    return this.mapStarship(starship)
                })
                }
            case CharacterEnum.SPECIE : {
                return list.map((specie : SpecieDTO) => {
                    return this.mapSpecie(specie)
                })
            }
        }
    }

    public static parseFilmDocumentToDto( filmDocument  : FilmDocument)  : FilmDTO{
        return new FilmDTO({
            director : filmDocument.director  ? filmDocument.director : null ,
            episode_id : filmDocument.episode_id ? filmDocument.episode_id : null,
            producer : filmDocument.producer ? filmDocument.producer : null,
            title : filmDocument.title ? filmDocument.title : null,
            openning_crawl : filmDocument.openning_crawl ? filmDocument.openning_crawl : null,
            release_date : filmDocument.release_date ? filmDocument.release_date : null
        })
    }

    public static parseFilmDocumentArrayToArrayDto( filmDocumentArray : FilmDocument[]) {
        return filmDocumentArray.map(filmDocument => this.parseFilmDocumentToDto(filmDocument))
    }
}