// metodo push
/*
const frutas = ["banana", "frutilla"];
const nuevaFruta = "pera";

frutas.push(nuevaFruta);

console.log(frutas);

// metodo shift
const frutasEliminda = fruta.shift();
console.log(frutasEliminda);
*/
//En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una
// función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:
//El primer elemento lo sacamos del array, ya que es el nombre del cliente.
//Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.

const array = ["federico Villace", "hamburgesa", "papas"];

function procesarPedido(pedidos) {
  //codigo
  const cliente = pedidos.shift();
  pedidos.push(cliente);
  const bebida = "Sprite";
  pedidos.unshift(bebida);
  return pedidos;
}
console.log(procesarPedido(array));
