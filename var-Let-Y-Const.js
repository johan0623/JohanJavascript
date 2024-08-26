// var vs let vs const#
// Uno de los mayores problemas al declarar variables con var, es que puede sobrescribir las declaraciones de variables sin errores

// En una aplicación pequeña, es posible que no se encuentre con este tipo de problema, pero cuando su código se agrande, puede sobrescribir accidentalmente una variable que no tenía la intención de sobrescribir.

// Debido a que este comportamiento no arroja un error, la búsqueda y corrección de errores se vuelve más difícil.Se introdujo let una nueva palabra clave llamada en ES6 para resolver este problema potencial con var.

var estado = true;
var estado = false;
console.log(estado);


// let: Una variable con el mismo nombre solo se puede declarar una vez.
// Si descomento esta parte me va dar error ya que tienen el mismo nombre


// let estado2 = true;
// let estado2 = false;
// console.log(estado2);


// A diferencia de var, let no se puede sobrescribir pero si se le puede cambiar el valor, por ejemplo
let estado3 = true;
estado3 = false;
console.log(estado);
