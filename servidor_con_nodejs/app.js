const http = require('http') // constante donde guarda la funcion http
const url = require('url')// constante donde se guarda la funcion url
const server = http.createServer((request,response)=>{
    try { // codigo que puede generar un error
        const parseURL = url.parse(request.url,true)// aqui se convierte la url para poder usar las funciones query
        const {name} = parseURL.query // aqui se usa la funcion name de query
        if(request.url == '/' && request.method == 'GET'){
            response.statusCode = 200 // aqui se coloca el codigo de estado de la respuesta
            response.end(JSON.stringify({message:message,age:2023})) //manera de enviar un mns al cliente (en este caso un json)
        } // aqui se realiza la comparacion de la peticion del servidor si la url es '/' y si el metodo usado es get
        else if(request.url == '/home' && request.method == 'GET'){
            response.statusCode = 300 // aqui se coloca el codigo de estado de la respuesta
            response.end(JSON.stringify({message:'curso nodejs lado home',age:2033})) //manera de enviar un mns al cliente (en este caso un json)
        } // aqui se realiza la comparacion de la peticion del servidor si la url es '/home' y si el metodo usado es get
        else if(parseURL.pathname === '/profile' && name){
            response.statusCode = 202// aqui se coloca el codigo de estado de la respuesta
            response.end(JSON.stringify({"message":"accediendo a ruta con parametro:"+name})) //manera de enviar un mns al cliente (en este caso un json)
        } 
        else if(request.url == '/register' && request.method == 'POST'){
            let body = ''
            request.on('data',(data)=>{
                body = body + data
            })// el request.on es para detectar eventos de las peticiones en este caso de los datos del body

            request.on('end',()=>{
                const parsedata = JSON.parse(body) // aqui se convierte el JSON del body en un objeto y se carga en la constante parsedata
                const {username,email} = parsedata //aqui se realiza una reestructuracion del objeto parsedata y se cargan en las variables username e email
                console.log(username,email)
                response.statusCode = 201// aqui se coloca el codigo de estado de la respuesta
                response.end(JSON.stringify({"message":"datos registrado"})) //manera de enviar un mns al cliente (en este caso un json)
            })// aqui se detecta el final de la peticion
        }// se realiaza la comparacion de la url y del metodo
        
        else{
            response.statusCode = 404 // aqui se coloca el codigo de estado de la respuesta
            response.end(JSON.stringify({message:'url no encontrada',age:2023})) //manera de enviar un mns al cliente (en este caso un json)
        }
    } catch (error) { // mensaje de error
        response.statusCode = 500 // aqui se coloca el codigo de estado de la respuesta
            response.end(JSON.stringify({message:'urror en el servicio',age:2023})) //manera de enviar un mns al cliente (en este caso un json)
    }


   
}) // constante donde se crea el servidor



const port = 5000 // constate donde se carga la direccion del servidor
const host = 'localhost' // constante donde se aloja el servidor

server.listen(port,host,()=>{
    console.log(`server running http://${host}:${port}`)
}) // funcion para darle direccion al servidor