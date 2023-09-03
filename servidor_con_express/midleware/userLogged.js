const userLogged = (request,response,next)=>{
    let isLogged = true;
    if(!isLogged){
        return response.status(401).json({"users":" no loggeado"})
    }else{
        next()
    }

}

exports.userLogged = userLogged;

/*
Existen 3 tipos de middlware 
- middleware creados por terceros
- middleware creados por el desarrllador y que puede ser usado de manera global



lso middleware tambien pueden ser usados en los controladores de rutas 
tomando en cuenta la exportacion en el archivo de los controladores y 
luego la ruta quedaria de la siguiente manera router.get('/',userLogged,controllers.getAllUsers) 
si se tienen varios middleware se pueden asignar en una lista ejemplo router.get('/',[userLogged1,userLogged2,userLogged3],controllers.getAllUsers) 
*/ 

