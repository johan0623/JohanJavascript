

// Sintaxis basica de la funcion de flecha
const flecha = () => {
    

    return console.log('Esto es una función con flecha');

}

console.log(flecha());


// Sin llaves: Hay return implícito.
// Con llaves: Necesitas usar return explícitamente si quieres devolver un valor.

// no tiene this o super y no se debe usar como metodos, pero si dentro de un metodo


// Si solo tienes un parámetro, puedes omitir los paréntesis:

// param => {
  // cuerpo de la función
// }


// Si el cuerpo de la función tiene una única expresión, puedes omitir las llaves y el return (la expresión se devuelve de manera implícita):

// param => param * 2  // Devuelve el doble del parámetro

