//importar el modulo HTTP que viene incluido en Node.js
const http = require('http');//todo lo que tenga con http va aqui, utiliza cosas de js
//error 200 para validar que este bien

//Definimos el puerto que va a tener
const port = 3009;

//Crear servidor
const server = http.createServer((Req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hola Mundo');

});
server.listen(port,()=>{
    console.log(`El servidor esta funcionado por medio de http://localhost${port}`);

})