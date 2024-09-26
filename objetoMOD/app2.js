let carrito = [];

let fruta = prompt("Ingresa una fruta");
 carrito.push(fruta)
 console.log(carrito);

 while ( confirm("Deseas agregar otra fruta?")) {
    let fruta = prompt("Ingresa una fruta");
    carrito.push(fruta)
    console.log(carrito);
 }

 alert("Usted compro")
 carrito.forEach((carrito, index)=>{
    mensaje += (`fruta (${index+1}).- ${carrito}\n`)
    alert (mensaje)
    console.log(`fruta (${index+1}).- ${carrito}`)
})