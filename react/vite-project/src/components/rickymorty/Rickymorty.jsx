import { useEffect, useState } from "react";

export default function Rickymorty() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((respuesta) => respuesta.json())
      .then((respuestaData) => setData(respuestaData.results));
  }, []);
  return (
    <>
      <div className="grilla ">
        {data.map((personaje, i) => (
          <div className="card" key={i}>
            <h1>{personaje.name}</h1>
            <h2>{personaje.gender}</h2>
            <h2>{personaje.location.name}</h2>
            <img src={personaje.image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
