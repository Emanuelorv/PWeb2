function generarNumeroMaquina() {
    return Math.floor(Math.random() * (10 - 1) + 1);
}

function obtenerNumeroUsuario(mensaje) {
    return parseInt(prompt(mensaje));
}

function juego() {
    const numeroMaquina = generarNumeroMaquina();
    console.log("Numero secreto: " + numeroMaquina);
    
    let numeroUser = obtenerNumeroUsuario("Ingresa un número del 1 al 10");
    let vidas = 3;

    while (numeroMaquina !== numeroUser && vidas > 1) {
        vidas--;
        numeroUser = obtenerNumeroUsuario("Intenta nuevamente, tus vidas son: " + vidas);
    }

    if (numeroMaquina === numeroUser) {
        alert("Ganaste");
        console.log("Ganaste");
    } else {
        alert("Perdiste, el número era: " + numeroMaquina);
        console.log("Perdiste, el número era: " + numeroMaquina);
    }
}

juego();