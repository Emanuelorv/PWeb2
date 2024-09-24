function sumar(n1, n2){
    return parseInt(n1)+parseInt(n2);
}

let num1 = prompt("Ingrese un número: ");
let num2 = prompt("Ingrese un número: ");

let resultado = sumar(num1, num2);
console.log(resultado);

let frutas = ("Melón","Platano");
console.log(frutas);
frutas.push = ("Sandia");
console.log(frutas);
//frutas.unshieft ("Sandia");
console.log(frutas);
let eliminaFruta = frutas.pop;
console.log(frutas);
console.log(eliminaFruta);
//Template String
console.log(`Hola ${num1}`);
// if sintactico
carritos.completada?"Completada":"Pendiente"