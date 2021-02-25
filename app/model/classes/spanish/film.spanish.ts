export class FilmSpanish{
    titulo : string;
    id_episodio : number;
    openning_crawl : string;
    director : string;
    productor : string;
    fecha_de_lanzamiento : string;
    creado: string;
    editado :string;

    constructor( film :Partial<FilmSpanish>){
        Object.assign(this,film)
      }
    
}