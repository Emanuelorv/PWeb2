// Lista de artículos con precios
let productos = [
    { nombre: "Camisa", 
    precio: 300 },
    { nombre: "Pantalón", 
    precio: 500 },
    { nombre: "Zapatos", 
    precio: 800 },
    { nombre: "Sombrero", 
    precio: 200 }
];

// Carrito de compras
let carrito = [];

// Función para mostrar el menú de opciones
function mostrarMenu() {
    return parseInt(prompt(`
        Seleccione un producto para agregar al carrito:
        1. Camisa - $300
        2. Pantalón - $500
        3. Zapatos - $800
        4. Sombrero - $200
        5. Ver Carrito y Total
        6. Vaciar carrito
        7. Salir
        `));
}

// Función para agregar un producto al carrito
function agregarAlCarrito(productoIndex) {
    let producto = productos[productoIndex - 1];
    carrito.push(producto);
    alert(`${producto.nombre} agregado al carrito.`);
}

// Función para ver el contenido del carrito y el total
function verCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let mensaje = "Artículos en el carrito:\n";
        let total = 0;
        carrito.forEach((producto, index) => {
            mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
            total += producto.precio;
        });
        mensaje += `\nTotal: $${total}`;
        alert(mensaje);
    }
}

// Función para vaciar el carrito y el total
function vaciarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito ya está vacío.");
    } else {
        carrito = [];
        let total = 0;
        alert(`El carrito ha sido vaciado.\n\nTotal $${total}`);
    }
}


// Función principal para manejar el flujo del programa
function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarAlCarrito(opcion);
                break;
            case 2:
                agregarAlCarrito(opcion);
                break;
            case 3:
                agregarAlCarrito(opcion);
                break;
            case 4:
                agregarAlCarrito(opcion);
                break;
            case 5:
                verCarrito();
                break;
            case 6:
                vaciarCarrito();
                break;
            case 7:
                alert("Gracias por su preferencia :)");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
        }
    }
    verCarrito(); // Mostrar el carrito antes de finalizar
    alert("Vuelva pronto. ;)");
}

// Iniciar el programa
iniciarPrograma();