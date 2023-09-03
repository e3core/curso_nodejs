const express = require('express')
const app = express()
const router = require('./routers/usersRouters')
const morgan = require('morgan') //esto es un middleware de terceros ( para ver los estados de las rutas)
const userLogged = require('./midleware/userLogged')
const path = require('path')

app.set('views',path.join(__dirname,'views')) // aqui se configura para buscar los archivos dentro de la carpeta views
app.set('view engine','ejs') // aqui se usa la configuracion del motor de plantija ejs
app.use(express.json()) // para que express pueda leer formatos json
app.use(userLogged.userLogged) // midleware creado por el desarrolador y podria ser usado de manera global
app.use(morgan('dev')) // se usa el morgan como dev

app.get('/',(request,response)=>{
    // aqui se usa el motor de plantilla ejs
    const data = {
        "title":"titulo: ", // para que este valor se pueda reflejar en el index.ejs asi <%= title %>
        "message":"prueba de motor de plantillas",
        "showmessage": true,
        "ites": [1,2,3,4,5,6,7,8,9]
    }
    response.render('index',data)
})

app.use('/users',router)

app.listen(5000,()=>{
    console.log('Aplicacion corriendo por el puerto 5000')
})
