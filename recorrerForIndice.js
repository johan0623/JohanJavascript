
// El for tiene 3 Partes
// primero se inicializa la variable en cero luego se crea la condicion y por ultimo el acumulador que en este caso se utilizo ++
let frutas = ["banana", "manzana", "fresa"];


for (let i = 0; i < frutas.length; i++) {

    console.log(frutas[i]);

}


// Con el forEach se hace lo mismo que con el codigo de arriba
// forEach significa para cada elemento del array hazme tal cosa

frutas.forEach(element => {
    console.log(`El forEach imprime todas las frutas recorridas que son:
        ${element}`);
    
});


// recorrer usando for of, recorramos cada letra de un string

let nombre = "Johan"

for (letra of nombre) {
    console.log(letra);

}

// Hay que tomar en cuenta que el for of es para los array, no debe ser utilizado para objetos



// Una opcion para objetos es el for in