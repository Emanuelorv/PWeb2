//Inicio de un arreglo para el almacen de carritos
let carritos=[];

function mostrarMenu{
    return parseInt(prompt("Opciones Disponibles/n"+"1.- Agregar carrito"+"2.- Ver todas las carritos"+"3.- Marca carrito como completada"+"4.- SVGRadialGradientElement"));
}

function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarcarrito();
            break;
            case 2:
                vercarrito();
            break;
            case 3:
                marcacarritoCompletado();
            break;
            case 4:
                alert("Saliendo ...");
                continuar = false;
            break;
            default:
                alert("Opción no valida");
        }
    }
    alert("Programa finalizado");
}