//while

/*const array = ["federico Villace", "hamburgesa", "papas"];

let contador = 0;

while (contador < array.length) {
  console.log(array[contador]);
  contador++;
}

//for

for (let i = 0; i < array.length; i++) {
  console.log(i, array[i]);
}

//foreach

array.forEach((element) => {
  console.log(element);
});
*/
//Ejercicio práctico:
//Dada una lista de números, escribe una función en JavaScript que devuelva
//la suma de todos los números pares en la lista. La función deberá iterar sobre cada número en la lista
//, comprobar si el número es par y, si es así, añadirlo a la suma total. Realizar una solución
// con for y una con while

const lista = [1, 2, 4, 5, 5, 6, 6, 7];
let sumadePares = 0;
let i = 0;

function sumarPares(numeros) {
  // código

  while (i < numeros.length) {
    if (numeros[i] % 2 === 0) {
      sumadePares = sumadePares + numeros[i];
    }
    i++;
  }
  return sumadePares;
}

console.log(sumarPares(lista));
