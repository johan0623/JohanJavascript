// Objetos anidados son objetos dentro de otros objetos que incluso pueden contener array


const gato = {
    nombre: "terry",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["cobarde", "timido"],
        favoritos: {
            comida: {
                frio: "salmon",
                caliente: "pollo"
            }


        }


    }
    
};

// Formas de acceder
console.log(gato.otros.favoritos.comida.frio); //imprime salmon
console.log(gato.otros.amigos[0]);// imprime cobarde


