let numeroMaquina = Math.floor (Math.random()*(10-1)+1);
console.log("Numero secreto: "+numeroMaquina);

let numeroUser = parseInt (prompt("Ingresa un número del 1 al 10"));

let vidas = 3;

while(numeroMaquina !== numeroUser && vidas>1){
    vidas--;
    numeroUser = parseInt(prompt("Intenta nuevamente y tus vidas son: "+vidas));
}

if (numeroMaquina == numeroUser){
    alert("Ganaste")
    console.log("Ganaste");
}else{
    alert("Perdiste el número era: "+numeroMaquina)
    console.log("Perdiste el número era: "+numeroMaquina);
}