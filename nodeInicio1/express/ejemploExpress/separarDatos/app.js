const express = require("express");
const router = express.Router();

//Definicion de las ruta y los manejadores

router.get("/",(req,res)=>{
    res.send("Hola desde la ruta de inicio, pagina principal")
})


router.get("/registro",(req,res)=>{
    res.send("Hola desde el registro")
})

module.exports = router;
