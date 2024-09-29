// Deberán realizar los siguientes ejercicios:

// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.


// ----------------------------------------RESPUESTAS-----------------------------------------------

// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function esPar(numero) {
  if (numero % 2 === 0) {
    console.log(`${numero} es par`);
  } else {
    console.log(`${numero} es impar`);
  }
}

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
function compararNumeros(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(`${numero1} es mayor que ${numero2}`);
  } else if (numero1 < numero2) {
    console.log(`${numero2} es mayor que ${numero1}`);
  } else {
    console.log(`${numero1} y ${numero2} son iguales`);
  }
}

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function multiploDeCinco(numero){

    if (numero % 5 === 0) {
    console.log(`${numero} es múltiplo de 5`);
  }else{
    console.log(`${numero} no es múltiplo de 5`);
  }
}

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function imprimirNumeros(numero){

  for(let i = 0; i <= numero; i++){
    console.log(i);
  }
}

// 5- Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function repetirPalabra(palabra, numero){

  for(let i = 0; i < numero; i++){
    console.log(palabra);
  }
}

// 6- Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
const miArray = [1, 2, 3, 4, 5,6,7,8,9,'Hola'];
function unArray(miArray){
  for(let i = 0; i < miArray.length; i++){
    console.log(miArray[i]);
  }
}

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
const segundoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const menosCinco = (array) => {
  for(let i = 0; i < array.length; i++){
    if(i !== 5){
      console.log(array[i]);
    }
  }
}


// 8 - Crear una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const tercerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplicarPor = (array, numero) => {
  for(let i = 0; i < array.length; i++){
    console.log(array[i] * numero);
  }
}