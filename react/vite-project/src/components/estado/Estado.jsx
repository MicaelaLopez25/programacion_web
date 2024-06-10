//hooks -> useStat
import { useEffect, useState } from "react";
//canelcase es la manera de escribir en el cual cada palabra nueva arranca con Mayuscula

export const Estado = () => {
  const [contador, setContador] = useState(0);

  const handClick = () => {
    setContador(contador + 1);
  };
  // useEffect se va a ejecutar la cantidad de veces que las dependencias se actualice
  //si no le pasan una deendencia se ejecutara solo al principio de la app
  //no en el primer render
  // si no se le pasa el array de dependendicias siempre se va a ejecutar
  useEffect(() => {
    console.log("El contador se ha actualizado");
  }, [contador]);

  const arrayPersonajes = [
    {
      name: "rick",
      lastName: "Sanchez",
      planet: "Earth",
      Image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty",
      lastName: "Smith",
      planet: "Earth",
      Image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ];

  return (
    <>
      <div className="grilla">
        {
          //cuando despues de la funcion flecha hay parentesis significa que el return es implicito
          //return implicito
          arrayPersonajes.map((personaje, i) => (
            <div key={i}>
              <div className="tarjetita">
                <h2>
                  {" "}
                  fullName: {personaje.name}
                  {personaje.lastName}{" "}
                </h2>
                <p>Planet: {personaje.planet}</p>
                <img src={personaje.Image} alt="description" />
              </div>
            </div>
          ))
        }
      </div>
      <button onClick={handClick}> Aumentar </button>
      <p>{contador}</p>
    </>
  );
};
