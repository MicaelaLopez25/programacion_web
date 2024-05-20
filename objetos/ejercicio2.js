const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};

const { weight = 70, height = 180 } = person;
console.log(weight, height);

//1- ¿Qué se imprimirá en la consola al ejecutar el siguiente código? y por que?

// Va imprimir la altura y el ancho por que al destructurarlo le estamos dando un valor al ancho y la altura

const persona = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};

const { age: personAge } = person;
console.log(age);

//2- ¿Qué se imprimirá en la consola al ejecutar el siguiente código? Y por que?

// nos daria error ya que nos faltaria un const personAge

//3- ¿Cómo se llama el atajo que nos permite recuperar el valor de una propiedad de un objeto?
// destructuracion para evitar poner . nos sirve cuando tenemos muchos objetos / arrays con mucha informacion
