
// En JavaScript, el término "scope"(alcance) se refiere al contexto en el que se define una variable y determina desde dónde se puede acceder a esa variable en el código.Existen principalmente tres tipos de scope en JavaScript:

// Scope Global:

// Las variables definidas en el ámbito global están disponibles en cualquier parte del código, fuera y dentro de cualquier función.
// Una variable se declara en el ámbito global si se define fuera de cualquier función o bloque de código.

var globalVariable = "I am global";
console.log(globalVariable); // I am global

// -------------------------------------------------------------------------------------------------------

// Scope de Función:

// Las variables declaradas dentro de una función son locales a esa función y no pueden ser accedidas desde fuera de la misma.
// Estas variables se declaran con var, let, o const dentro de la función.


function myFunction() {
    var functionVariable = "I am local to this function";
    console.log(functionVariable); // I am local to this function
}
console.log(functionVariable); // ReferenceError: functionVariable is not defined.

// Este error lo da porque estamos imprimiendo desde afuera una variable que se encuentra dentro de la funcion

myFunction()// llamada a la funcion para que se ejecute


// -------------------------------------------------------------------------------------

// Scope de Bloque:

// Introducido con let y const en ES6, el scope de bloque se refiere a variables que son accesibles solo dentro del bloque en el que se definen, como en una estructura if, for, while, etc.
// var no respeta el scope de bloque, pero let y const sí lo hacen.
if (true) {
    let blockVariable = "I am local to this block";
    console.log(blockVariable); // I am local to this block
}
console.log(blockVariable); // ReferenceError: blockVariable is not defined


// Entender el scope es crucial para evitar errores como las variables no definidas o las colisiones de nombres de variables.