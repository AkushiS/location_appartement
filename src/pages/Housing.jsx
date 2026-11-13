import { useParams } from "react-router";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";

function Housing() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }

        return response.json();
      })
      .then((data) => setLogement(data))
      .catch((error) => {
        console.error("Erreur API :", error);
        setErreur(error.message);
      });
  }, [id]);

  console.log(logement);

  if (erreur === "Erreur HTTP : 404") {
    return <NotFound />;
  }

  return (
    <main>
      <h1>{logement ? logement.title : "Chargement..."}</h1>
    </main>
  );
}

export default Housing;
