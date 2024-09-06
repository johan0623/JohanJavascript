// crear un carrito basico usando prompts y verificar resultados en consola


let carrito = []; 

let items = prompt("Ingrese el producto que desea comprar");

while (items !== "") {
    carrito.push(items);
    items = prompt("Ingrese otro producto (o presione enter para finalizar)");
}

console.log("Usted compro: ", carrito);
