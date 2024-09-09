// vincule este js a un archivo html llamado objetos.html para verificar los resultados por consola


const gato = {
    nombre: "terry",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
    
}


console.log(gato.nombre);// Podemos acceder a las propiedades con el punto como se ve en esta linea de codigo

// Tambien podemos acceder a las propiedades de la siguiente forma:
console.log(gato["edad"]);

// si queremos acceder al array que tiene la clave enemigos lo podemos hacer con su indice
// por ejemplo dentro de enemigo quiero acceder a la propiedad agua

console.log(gato.enemigos[0]);// Esto imprime agua

// A pesar de que con el punto es mas facil tambien hay que aprender con los corchetes ya que estos nos ayudaran mas adelante para para recorrer los objetos