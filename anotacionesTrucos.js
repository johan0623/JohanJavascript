// Aquí tienes una lista de anotaciones y trucos útiles en JavaScript que puedes guardar para referencia futura:

// ### 1. **Uso de `let` y `const`**
//    - `let` permite declarar variables que pueden ser reasignadas.
//    - `const` se usa para declarar variables que no deben cambiar.
//    - **Ejemplo:**
//      ```javascript
//      let contador = 0;
//      const MAX_VALOR = 100;
//      ```

// ### 2. **Template Literals**
//    - Facilita la concatenación de cadenas y la inserción de variables en ellas.
//    - **Ejemplo:**
//      ```javascript
//      let nombre = "Juan";
//      let saludo = `Hola, ${nombre}!`;
//      ```

// ### 3. **Arrow Functions**
//    - Sintaxis más corta para definir funciones.
//    - No tienen su propio `this`.
//    - **Ejemplo:**
//      ```javascript
//      const sumar = (a, b) => a + b;
//      ```

// ### 4. **Destructuración de Objetos y Arrays**
//    - Extrae valores de objetos o arrays de manera más concisa.
//    - **Ejemplo:**
//      ```javascript
//      let {nombre, edad} = {nombre: "Ana", edad: 25};
//      let [primero, segundo] = [10, 20];
//      ```

// ### 5. **Spread Operator (`...`)**
//    - Expande un array o un objeto en un nuevo array o objeto.
//    - **Ejemplo:**
//      ```javascript
//      let arr1 = [1, 2, 3];
//      let arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]
//      ```

// ### 6. **Default Parameters**
//    - Asigna valores predeterminados a los parámetros de funciones.
//    - **Ejemplo:**
//      ```javascript
//      function saludar(nombre = "Visitante") {
//        return `Hola, ${nombre}`;
//      }
//      ```

// ### 7. **Métodos de Array útiles**
//    - `map()`, `filter()`, `reduce()`, `forEach()`, `find()`, entre otros.
//    - **Ejemplo:**
//      ```javascript
//      let numeros = [1, 2, 3, 4];
//      let cuadrados = numeros.map(n => n * n);  // [1, 4, 9, 16]
//      ```

// ### 8. **Clausuras (Closures)**
//    - Funciones internas que tienen acceso a las variables de la función externa.
//    - **Ejemplo:**
//      ```javascript
//      function crearContador() {
//        let contador = 0;
//        return function() {
//          contador++;
//          return contador;
//        };
//      }
//      let contador = crearContador();
//      console.log(contador());  // 1
//      console.log(contador());  // 2
//      ```

// ### 9. **Async/Await**
//    - Manejo de operaciones asincrónicas de manera más legible.
//    - **Ejemplo:**
//      ```javascript
//      async function obtenerDatos() {
//        let response = await fetch('https://api.example.com/datos');
//        let data = await response.json();
//        console.log(data);
//      }
//      ```

// ### 10. **Object.assign() y Object Spread**
//    - Copiar y fusionar objetos.
//    - **Ejemplo:**
//      ```javascript
//      let obj1 = { a: 1, b: 2 };
//      let obj2 = { b: 3, c: 4 };
//      let fusionado = { ...obj1, ...obj2 };  // { a: 1, b: 3, c: 4 }
//      ```

// ### 11. **Operador Ternario**
//    - Forma concisa de un `if...else`.
//    - **Ejemplo:**
//      ```javascript
//      let esMayor = edad >= 18 ? "Adulto" : "Menor";
//      ```

// ### 12. **Uso de `nullish coalescing` (`??`)**
//    - Retorna el operando de la derecha si el de la izquierda es `null` o `undefined`.
//    - **Ejemplo:**
//      ```javascript
//      let usuario = null;
//      let nombre = usuario ?? "Visitante";  // "Visitante"
//      ```

// ### 13. **Optional Chaining (`?.`)**
//    - Evita errores al intentar acceder a propiedades de objetos que pueden no existir.
//    - **Ejemplo:**
//      ```javascript
//      let usuario = {};
//      let nombre = usuario?.info?.nombre;  // undefined
//      ```

// ### 14. **Defer y Async en Scripts**
//    - `defer`: Carga el script de manera asíncrona y lo ejecuta después de que el HTML se haya parseado.
//    - `async`: Carga el script de manera asíncrona y lo ejecuta inmediatamente cuando está disponible.
//    - **Ejemplo:**
//      ```html
//      <script src="script.js" defer></script>
//      <script src="script.js" async></script>
//      ```

// ### 15. **Console Tricks**
//    - `console.table()`: Muestra datos en una tabla.
//    - `console.group()`, `console.groupEnd()`: Agrupa mensajes en la consola.
//    - **Ejemplo:**
//      ```javascript
//      console.table([{ name: "Juan", age: 20 }, { name: "Ana", age: 25 }]);
//      ```

// Estos trucos y anotaciones deberían serte útiles en tu trabajo con JavaScript. ¡Guárdalos y consúltalos cuando lo necesites!