/*let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");
let nacionalidad = prompt("Ingresa tu nacionalidad");

console.log(nombre);
console.log(edad);
console.log(nacionalidad);
*/
//Sin Casteo
/*
let numbero1 = prompt("Ingresa tu primer número");
let numbero2 = prompt("Ingresa tu segundo número");
let resultado = numbero1 + numbero2;
console.log("Tu resultado es " + resultado)

console.log(typeof numbero1);
*/
//Con Casteo o Parseo
let numbero1 = prompt("Ingresa tu primer número");
let numbero2 = prompt("Ingresa tu segundo número");
let resultado = parseInt(numbero1) + parseInt(numbero2);
alert("La suma es igual a "+resultado)
console.log("Tu resultado es " + resultado);
console.log(typeof numbero1);