//siempre las funciones deben poner un valor de retorno
function number1() {
  const number1 = document.getElementById("number1").value;
  return parseInt(number1);
}

function number2() {
  const number2 = document.getElementById("number2").value;
  return parseInt(number2);
}

function calculate() {
  let resultado = number1() + number2(); //para ejecutar una funcion al final debemos poner parentesis
  console.log(resultado);
  document.getElementById("resultado").textContent = resultado;
}
