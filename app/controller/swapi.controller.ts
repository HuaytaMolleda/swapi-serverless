
import {SwapiService } from "../service/swapi.service";
import { MappingUtil } from "../utils/mapping.util";
import { MessageUtil } from "../utils/message";

export class SwapiController{
    
   

    swapiService : SwapiService;
    constructor(swapiService : SwapiService){
        this.swapiService = swapiService
    }

    async listSwapiItems (event : any) {
    
        try {
            
            const {model}  = event.pathParameters
            
            const swapiList  : any  = await this.swapiService.listItems(model)
            
            const mappingList  : Array<any> = MappingUtil.parseArrayByModel(model,swapiList.results)
            

            return MessageUtil.success(mappingList)

            
        } catch (error) {
            return MessageUtil.error(error.code,error.message)
            
        }
    }

    async findSwapiItem (event : any) {

        try {
            
            const {model,id}  = event.pathParameters
            
            const swapiItem : any  = await this.swapiService.singleItem(model,id)
            
            const mappedItem : any  = MappingUtil.parseSingleItem(model,swapiItem)
            
            return MessageUtil.success(mappedItem)

            
        } catch (error) {
            return MessageUtil.error(error.code,error.message)
            
        }
    }
}