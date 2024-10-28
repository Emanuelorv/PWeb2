//Express - mildware dependiendo de lo que quiere el cliente hacemos
const express = require("express");

const app = express();
//node se installa a nivel servidor y utilizar diversos puertos
app.get("/",(req,res)=>{
    //res.send("Hola Mundo")
    //res.sendFile("/home/emanuel/Documentos/pw2/node/express/ejemploExpress");
    res.sendFile(path.join(__dirname+"/index.html"));
});

const port= 3056;

app.listen(port,()=>{
    console.log(`El server esta en escucha desde el http://localhost:${}`)
})