/*
//ejercicio 1 Version 1
console.log(`xxxx`)
console.log('x\nx\nx\nx')
alert(`xxxx`)
alert('x\nx\nx\nx')
*/
//ejercicio 1 Version calmada
let horizontal  = []
let vertical = []
for (let i=0; i<4; i++){
    horizontal.push("x")
}
for (let i=0; i<4; i++){
    vertical.push("x")
} 
horizo = horizontal.join("")
verti = vertical.join("\n")

console.log(horizo)
console.log(verti)
alert(horizo)
alert(verti)
/*
//ejercicio 1 version más limpia y bonita
let horizontal  = []
let vertical = []
for (let i=0; i<4; i++){
    horizontal.push("x")
}
for (let i =1; i<4; i++){
    vertical.push("x")
} 
horizo = horizontal.join("")
verti = vertical.join("\n")
let mensaje = horizo + "\n"+ verti
console.log(mensaje)
alert(mensaje)
*/
/*
//ejercicio 2 version definitiva

let x = parseInt(prompt("Dame el numero de equis horizontales."))
let y = parseInt(prompt("Dame el numero de equis verticales."))

let mensaje = "";
let horizontal = [];
let vertical = [];

for (let i = 0; i < x; i++) {
    horizontal.push('x');
}

for (let i = 1; i < y; i++) {
    vertical.push('x');
}

let horizo = horizontal.join('');
let verti = vertical.join('\n');

console.log(horizo+"\n"+verti);
alert(horizo + "\n"+ verti);
*/
/*
//ejercicio 2 version 1
let x = parseInt(prompt("Dame el numero de equis horizontales."))
let y = parseInt(prompt("Dame el numero de equis verticales."))
equis="x"
let verti = []
for (let j = 1; j < y; j++) {
    verti.push(equis)
}
let vertical = verti.join("\n")
let final = `${equis.repeat(x)}\n${vertical}`

alert(final)
console.log(final)
*/

/*
//Ejercicio 3 Cuadrado
//version 1
let x = parseInt(prompt("Dame el numero de equis horizontales."))
let y = parseInt(prompt("Dame el numero de equis verticales."))

let equis = "x"
cuadro = []
for (let i = 1; i < y; i++) {
    cuadro.push(equis)
}
let vertical = cuadro.join("\n")
let final =`${equis.repeat(x)}\n${vertical}`; 

console.log(final)
alert(final)
*/

/*
//version 2
let x = parseInt(prompt("Ingresa el ancho del cuadrado"));
let y = parseInt(prompt("Ingresa el largo del cuadrado"));
let cuadroFilas = [];

for (let i = 0; i < y; i++) {
    let fila = [];
    for (let j = 0; j < x; j++) {
        fila.push('x');
    }
    cuadroFilas.push(fila.join(''));
}

let cuadrado = cuadroFilas.join('\n');
console.log(cuadrado);
alert(cuadrado);
*/

/*
//Tablas de Multiplicar
let tablas = [];
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        tablas.push(`${i} x ${j} = ${i * j}`);
    }   
    tablas.push('');
}

let tablasSL = tablas.join('\n');
console.log(tablasSL);
alert(tablasSL);
*/