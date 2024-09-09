// hasOwnProperty#
// A veces es útil comprobar si existe o no la propiedad de un objeto dado. Podemos utilizar el método .hasOwnProperty(propname) para determinar si un objeto tiene una propiedad con ese nombre. .hasOwnProperty() devuelve true o false si se encuentra la propiedad o no.`


const gato = {
    nombre: "terry",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
    
}


console.log(gato.hasOwnProperty("edad"));// Esto devolvera true si la edad existe y falso si no existe


// por ejemplo podemos usar un if junto con hasOwnProperty para determinar si el nombre existe y si existe lo podemos actualizar


if (gato.hasOwnProperty("nombre")) {
    gato.nombre = "Johan";


}

console.log(gato);

