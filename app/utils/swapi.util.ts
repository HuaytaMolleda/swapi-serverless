
import axios, { AxiosResponse }  from "axios";
import { buildRequest } from "./string.util";



export class SwapiUtl{

    /**
     * singleRequest
     */
    public static async singleRequest(path : string , id : string)  : Promise<object>{
        

        
        return axios.get(buildRequest(process.env.SWAPI_URL,path,id)).then((response : AxiosResponse) => {
            return response.data;
        }).catch((error) => console.log(error))

    }
    /**
     * listRequest
     */
    public static  async listRequest(path : string) : Promise <object>{
        return axios.get(buildRequest(process.env.SWAPI_URL,path)).then((response : AxiosResponse) => {
            return response.data
        }).catch((error) => console.log(error)
        )
    }


}