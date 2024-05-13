/*Ejercicio: 
Crear una función que reciba un array de palabras y devuelva true 
si todas las palabras terminan con la letra "a" y false si al menos una palabra no
 termina con la letra "a".
*/
let str = ["arroz", "manzana", "mandarina"];

function terminanEnA(words) {
  // código
  for (let i = 0; i < words.length; i++) {
    let resultado = words.every((word) => word.endWith("a"));
    return resultado;
  }
}
console.log(terminanEnA(str));
