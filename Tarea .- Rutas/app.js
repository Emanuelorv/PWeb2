const express = require("express");
const path = require("path");
const pagesRoutes = require("./routes/pages");

const app = express();
const port = 3059;

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Rutas principales
app.use('/', pagesRoutes);

// Redirección desde la raíz a la calculadora por defecto
app.get('/', (req, res) => {
    res.redirect('/calculadora');
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
});
