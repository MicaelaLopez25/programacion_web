//arrays

const ejemploArray = [1, 2, 3];
console.log(ejemploArray[1]);

//objetos

const persona = {
  //clave : valor
  name: "mica",
  age: 16,
  isWorking: true,
  perros: [
    "chifo",
    "max",
    "canela",
    "hinata",
    "chifito",
    "harry",
    "chocolate",
    "mama",
    "gorda",
  ],
  walk: function () {
    // si la funcion retonar void no devuelve nada, si no , aclara el tipo de dato
    console.log("estoy caminando");
    // si la funcion no devuelve ningun valor, va a devolver un undefined por default
    return "estoy caminando";
  },
};

console.log(persona.name);
console.log(persona["name"]);
console.log(persona.perros[2]);
//si cuando estan mostrando/ejecuntando una funcion y no le ponene los () esta no va a funcionar
console.log(persona.walk());

persona.age = 17;
//con esto ya se puede pisar/resignar un valor que ya tenemos o renombrar
console.log(persona.age);

//delete borra las propiedades seleccionadas del objeto
delete persona.age;
