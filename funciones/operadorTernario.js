
let nombreUsuario = "Kiko"
let estado = true;


// La sintasix del operador ternario es de la siguiente forma primero declare una variable llamada estado y la puse en true, luego puse estado ?
//  lo que significa que si es true tirara el primer valor que dice En linea y si es falso tirara el segundo valor que es Offline. SIEMPRE EL PRIMER VALOR ES EL TRUE Y LUEGO EL FALSE
console.log(`
    ${estado ? "En linea" : "Offline"}
    
    
    `);


    // aqui me imprimra que esta en linea ya que la variable estado esta en true







    





let usuario = "Ana";
let activo = false;

// Usamos el operador ternario para asignar un estado basado en la variable activo
let mensajeEstado = activo ? "Disponible" : "No disponible";

// Luego, usamos la variable mensajeEstado en alguna parte del código
let mensaje = `
    El usuario ${usuario} está actualmente ${mensajeEstado}.
`;

console.log(mensaje);
