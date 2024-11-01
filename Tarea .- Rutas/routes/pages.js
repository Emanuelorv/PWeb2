const express = require("express");
const path = require("path");
const router = express.Router();

// Ruta para la página de la calculadora
router.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'calculadora.html'));
});

// Ruta para la página del generador de QR
router.get('/generadorQR', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'generadorQR.html'));
});

module.exports = router;
