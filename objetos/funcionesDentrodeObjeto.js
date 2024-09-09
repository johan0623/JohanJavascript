// Aqui no se debe usar funcion flecha

const gato = {
    nombre: "terry",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer: function (){// funcion
        console.log("Gato comiendo");
    },

    comerDos(alimento) {
        console.log("Gato comiendo dos y come:" + alimento)


        // Otra forma de imprimir usando backtick
        console.log(`${this.nombre} esta comiendo ${alimento}`);
    }
};


gato.comer();// Llamada a la funcion comer

gato.comerDos("pez");// Llamada a la funcion comer, esta funcion hace lo mismo y es mas corta.

// Estas funciones tambien pueden recibir parametros, por ejemplo el pez se esta pasando por parametros

// usando los backtick podemos imprimir otras propiedades por ejemplo el nombre del gato


