import { SwapiUtl } from "../utils/swapi.util";


export class SwapiService{

  listItems (model : string)  : Promise<any>{

   return  SwapiUtl.listRequest(model)
  }

  singleItem (model : string , idItem : number) : Promise<any> {
    return SwapiUtl.singleRequest(model, String(idItem))
  }


  
}