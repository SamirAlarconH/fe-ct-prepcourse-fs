/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return (array.shift()); // return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.lenght
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map(num =>{return num +1}) //var nuevoArray = []
   return masUno;                                //for(let i = 0; i<array.lenght;i++)
                                                // nuevoArray.push(array[i] + 1) return nuevoArray
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return (array);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
      array.unshift(elemento);
      return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   //<= arreglo.lenght -1
   /*var frase = " ";
   for(let i = 0; i < palabras.lenght; i++){
      frase+= palabras[i] + " "
   }
   return frase.trim();//Elimina los espacios en blanco
   */
   return palabras.join(" ");
}


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var incluyeElemento = array.includes(elemento);
   if(incluyeElemento){
      return true;
   }return false;
   /*OTRA SOLUCION
      for (let i = 0; i < array.lenght; i++){
         if(array[i] === elemento)return true;
      }return false;
      O TAMBIEN
      return array.includes(elemento)a
   */
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var resultado = 0;
   for(let i = 0; i <arrayOfNums.lenght; i++){
      resultado += arrayOfNums[i];
   }return resultado;
   /*
   arrayOfNumbs.reduce(function(acumulador, elemento){
      return acumulador + elemento
   }
   )
   */
   
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var sumaTest = 0;
   for(var i = 0; i < resultadosTest.lenght; i++){
       sumaTest += resultadosTest[i];
      } 
   var resultado = sumaTest/resultadosTest.lenght;
   return resultado
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numeroMayor = 0;
   for(let i = 0 ; i < arrayOfNums.lenght ; i++){
      if(arrayOfNums[i] > numeroMayor){
         numeroMayor = arrayOfNums[i];
      }
   }
   return numeroMayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length === 0){
      return 0;
   }else{
      if(arguments.length === 1){
         return arguments[0];
      }else{
         var producto = 1;
         for(let i = 0; i < arguments.length; i++){
      producto *= arguments[i];}
      }
   }
   return producto;
   
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;
      array.forEach((num) =>{
         if(num > 18){
            contador++;
         }
      })
      return contador;
      /*
      for(let i = 0; i< array.lenght; i++){
         if(array[i] > 18) contador++;
      }
      */
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch(numeroDeDia){
      case 1 : return("Es fin de semana");break;
      case 2 : return("Es dia laboral");break;
      case 3 : return("Es dia laboral");break;
      case 4 : return("Es dia laboral");break;
      case 5 : return("Es dia laboral");break;
      case 6 : return("Es dia laboral");break;
      case 7 : return("Es fin de semana");break;
   }
   /*
   if(numeroDeDia === 1 || numeroDeDia === 7){
      return ("Es fin de semana")
   }else{
      return("Es día laboral")
   }
   */

}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var str = num.toString();
   return str[0] === "9";
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
      var posicionCero = array[0];
      var sonIguales = array.every((num) =>{
         return num == posicionCero;
      })
      if(sonIguales){
         return true;
      }
   return false;
   }
   /*for(let i = 0; i<array.lenght - 1; i++){
      if(array[i] !== array[i + 1]){
         return false;
      }
   }
   return true;
   */


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevoArreglo = [];
      array.forEach((mes) =>{
         if(mes == "Enero" || mes == "Marzo" || mes == "Noviembre"){
            nuevoArreglo.push(mes);
         }
      })
      if(nuevoArreglo.includes("Enero") && nuevoArreglo.includes("Marzo") && nuevoArreglo.includes("Noviembre")){
         return nuevoArreglo;
      }
   return ("No se encontraron los meses pedidos");
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var x = 0;
   var multi = 0;
   var tablaArray = [];
   while(x<=10){
      multi = 6 * x;
      tablaArray.push(multi);
      x++;
   }
   return tablaArray;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nuevoArray = [];
   array.forEach((num) =>{
      if(num > 100){
         nuevoArray.push(num);
      }
   })
   return nuevoArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   
   var array = [];
   for(let i = 1; i<=10;i++){
      num +=2;
      array.push(num);
      if(num == i){
         return "Se interrumpió la ejecución";
      }
   }
   return array;
   }
 


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array = [];
   for(let i = 1;i <=10;i++){
      num +=2;
      array.push(num);
      if(i == 5)i++;
   }
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
