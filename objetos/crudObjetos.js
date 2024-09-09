console.log("Hello world!");// Archivo vinculado correctamente a crubOjetos.html


const gato = {
    nombre: "terry",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
    
}


gato.color = "Azul";// Con esta linea de codigo agregamos otra propiedad que es el color azul


console.log(gato);


gato.edad = 5;// Actualizar un dato, en este caso la edad es 10 y se actualizara a 5
console.log(gato);


delete gato.duerme;// Eliminar un dato, en este caso la propiedad duerme
console.log(gato);
