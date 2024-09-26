/*function numeroAleatorio (min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(numeroAleatorio(5,15))
*/

//funciones expresadas, hasta que el interprete alcance el código, hasta que se ejecute
//expresada en una variable
/*
let calcularAleatorio = function numeroAleatorio (min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(numeroAleatorio(1,11))
*/
//funcion flecha
//let numero = (max,min) => {return Math.floor(Math.random()*(max-min)+min)};
let numero = (max,min) => Math.floor(Math.random()*(max-min)+min);

console.log(numero(15,1))