// El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

const frutas = ["sandia", "pera"];
frutas.pop();

console.log(frutas);

// En este caso pera es el ultimo elemento por eso se va eliminar


// si queremos que lo que eliminamos se devuelva ya sea para que el usuario lo vea o para nosotros imprimirlo por consola lo que debemos de hacer es crear una const y ahi pasarle el metodo pop

// por ejemplo

const frutas2 = ["banana", "mango"];
const frutaEliminada = frutas2.pop();

console.log(frutaEliminada);


// la variable frutaEliminada almacena el elemento que se elimino y luego lo imprimimos, como resultado saldra mango
