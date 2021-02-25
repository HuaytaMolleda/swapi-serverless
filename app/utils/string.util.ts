export const buildRequest   = (...args) : string => {
    

    let  url : string  ;

    if (!args[2]){
        url =  args.reduce((url,path) => {
            return url.concat(path)
        }) 
    }else{
        url  = args.reduce((previousValue, currentValue) => {
            return previousValue.concat(currentValue).concat("/")
        })
    }
    return url;

}