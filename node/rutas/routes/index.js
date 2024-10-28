const express = require("express");
const path = require("path")
const router = express.Router();

//definicion de las rutas y los manejadores
router.get("/",(req,res)=>{
    res.send("Hola desde mi ruta de inicio, pagina principal")
});

router.get("/quienSoy", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "quienSoy.html"));
});

router.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "contacto.html"));
});

module.exports = router;