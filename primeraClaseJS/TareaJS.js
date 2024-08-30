let edad = prompt("Ingresa tu edad");
let peso = prompt("Ingresa tu peso en kg");
let estatura = prompt("Ingresa tu estatura en m");
let nombre = prompt("Ingresa tu nombre");
let ms = parseInt(peso) / (parseInt(estatura) * parseInt(estatura));
alert("Hola "+ nombre + ", tu IMC es de " + ms);
console.log("Tu IMC es " + ms);
console.log(typeof ms);