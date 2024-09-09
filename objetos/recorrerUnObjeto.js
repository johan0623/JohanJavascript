// Hay que tomar en cuenta que el for of es para los array, no debe ser utilizado para objetos



// Una opcion para objetos es el for in

const gato = {
    nombre: "terry",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],

}


for (let item in gato) {
    console.log(item);//esto solo imprime la clave, no los valores

    // para los valores imprimimos asi:
    console.log(gato[item]);
    
}

// acceder mediante corchetes es importante ya que hay caso como este que no funciona usar gato.item