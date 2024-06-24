import { useEffect } from "react";
import { useState } from "react";

export default function GetPosts() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((respuesta) => respuesta.json())
      .then((respuestaData) => setData(respuestaData));
  }, []);

  return (
    <>
      {!data ? (
        <> loading... </>
      ) : (
        <>
          <h2>
            {" "}
            objeto title:
            {data.title}
            id: {data.id}
          </h2>
          <p>body: {data.body}</p>
        </>
      )}
    </>
  );
}
