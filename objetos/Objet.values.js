// Object.values(): devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto


const gato = {
    nombre: "terry",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],

}


console.log(Object.values(gato));//devuelve un array con los valores

Object.values(gato).forEach((item) => console.log(item));//devuelve los valores pero sin array solo recorridos
