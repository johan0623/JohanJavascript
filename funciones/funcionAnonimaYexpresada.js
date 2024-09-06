

// una funcion expresada es aquella a la cual no le colocamos nombre a la funcion, sino que la guardamos en una variable y cualquier resultado de esa funcion estara en dicha variable

// por ejemplo

// Hay que tomar en cuenta que :


// con las funciones declaradas, tenemos la seguridad de que siempre estarán disponibles en tiempo de ejecución. Con las funciones expresadas, tendremos que éstas no son evaluadas hasta que el intérprete no alcance su posición en el código, lo cual puede generar errores en arquitecturas muy anidadas.

// En JavaScript, el hoisting es un comportamiento por el cual las declaraciones de variables y funciones se "mueven" al comienzo de su contexto de ejecución (ya sea el ámbito global o una función) durante la fase de compilación, antes de que se ejecute el código. Esto significa que puedes usar variables o funciones antes de declararlas en el código, aunque el comportamiento puede variar dependiendo de cómo se declaren.
let numeroAzar = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

console.log(numeroAzar(10, 20));


// notas extras

// Función Anónima: Es simplemente una función que no tiene un nombre, y es muy común verla dentro de funciones expresadas. No tiene un identificador propio.