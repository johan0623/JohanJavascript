//  El método forEach() ejecuta la función indicada una vez por cada elemento del array.



// El método forEach en JavaScript es una función nativa de los arrays que permite ejecutar una función sobre cada uno de los elementos de dicho array, sin modificarlo. Este método es muy útil cuando necesitas realizar alguna acción para cada elemento del array, como imprimir valores, modificar variables externas o hacer cálculos.


// Sintaxis:
// array.forEach(function(elemento, indice, array) {
//   // Código a ejecutar
// });



// Parámetros
// elemento: El elemento actual del array que se está procesando en ese momento.
// indice (opcional): El índice del elemento actual.
// array (opcional): El array completo sobre el que se está iterando.





// Función flecha (arrow function)
// Una forma más moderna y concisa de usar el método forEach es con funciones flecha:

// array.forEach((elemento, indice, array) => {
//   // Código a ejecutar
// });





let frutas = ["manzana", "sandía", "pera"]

frutas.forEach(fruta => console.log(fruta));

// Este codigo imprime cada una de las frutas en la consola, es similar al for pero con forEach se puede hacer de una manera más limpia y concisa.



// Comportamiento del forEach
// Itera todos los elementos: Ejecuta la función una vez para cada elemento del array, sin importar si el array tiene elementos undefined, null o vacíos.

// No retorna valores: forEach siempre retorna undefined. No se puede detener su ejecución como en el caso de for o while con break. Si necesitas detener la iteración, puedes usar otros métodos como every, some, find o un simple bucle for.

// No crea un nuevo array: A diferencia de otros métodos de arrays como map, filter o reduce, forEach no devuelve un array nuevo, sino que simplemente itera sobre el existente.



// No es adecuado para asíncronas: forEach no se comporta bien con funciones async/await. Si intentas usar await dentro de forEach, las promesas no se resolverán como esperas. En ese caso, es mejor usar for...of o un bucle for tradicional.

// Podemos usar el forEach en los this para llegarle a lo que queremos llegarle por ejemplo

// this.nombre.forEach   etc