
// los input que usamos en python en js son llamados prompt y salen como salen las alertas, el resultado sera visto en consola del navegador, por ende debemos conectar este js a un archivo html, verificar la consola del archivo llamado prompt.html para ver el resultado
function sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2); //se parsea a entero ya que los prompt manejan string por defecto
}

let numeroUno = prompt("Ingrese primer número"); // si deseabamos tambien se podia parsear a entero aqui
let numeroDos = prompt("Ingrese segundo número");

let resultado = sumar(numeroUno, numeroDos);

console.log("El total es: " + resultado);


