exports.getAllUsers = (request,response)=>{
    response.status(200).send('accediendo a todos los usuarios')
}
exports.getUsers = (request,response)=>{
    response.status(200).send('accediendo a todos los usuarios' + request.params.id)
    // la ide o mejor dicho ese para metro se debe reflejar en la url de la siguiente manera 
    //http://localhost:5000/users/5
    response.send(request.query.enable)
    //http://localhost:5000/users/5?enable=true
}

exports.createUsers = (request,response)=>{
try {
    let data = request.body
    const {name,lastname,email,phone} = data 
    console.log(name,lastname,email,phone)
    response.status(201).send('Usuario registrado')
} catch (error) {
    response.status(500).send("mensage de error")
    //tambien puede ser un formato json response.status(500).json({"error":"error de aplicacion"})
    
}

   
}
exports.updateUsers = (request,response)=>{
    response.status(200).send('Usuario modificado')
    console.log('accediendo a todos los usuarios' + request.params.id)
}

exports.deleteUsers = (request,response)=>{
    response.status(200).send('Usuario eliminado')
    console.log(request.params.id)
}