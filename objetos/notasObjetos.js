// Resumen:
// Los objetos son colecciones de pares clave-valor.
// Pueden almacenar datos y funciones (métodos).
// Se puede acceder, modificar, agregar y eliminar propiedades.
// El uso de this en métodos de objetos permite acceder a las propiedades internas.
// Las clases proporcionan una manera eficiente de crear objetos similares.

// Definición de un objeto: Los objetos pueden crearse de varias maneras, pero la más común es utilizando llaves {} para definir un conjunto de pares clave-valor.


let persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Desarrollador'
};

// En este ejemplo, persona es un objeto con tres propiedades: nombre, edad, y profesion. Cada propiedad tiene un valor asignado.

// Acceso a las propiedades: Las propiedades de un objeto pueden accederse de dos maneras:

// Notación de punto: objeto.propiedad
// Notación de corchetes: objeto['propiedad']

console.log(persona.nombre);  // 'Juan'
console.log(persona['edad']);  // 30


// Métodos: Un método es una función almacenada como una propiedad de un objeto. Los métodos permiten que los objetos puedan realizar acciones


let coche = {
    marca: 'Toyota',
    arrancar: function() {
        console.log('El coche ha arrancado');
    }
};

coche.arrancar();  // 'El coche ha arrancado'


// Los objetos son similares a los arreglos (arrays), excepto que en lugar de usar índices para acceder y modificar sus datos, accedes a los datos en objetos a través de propiedades (properties).