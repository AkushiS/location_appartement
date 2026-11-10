import { useParams } from "react-router";
import { useState, useEffect } from "react";

function Housing() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => response.json())
      .then((data) => setLogement(data))
      .catch((error) => console.error("Erreur API :", error));
  }, [id]);

  console.log(logement);

  return (
    <main>
      <h1>{logement ? logement.title : "Chargement..."}</h1>
    </main>
  );
}

export default Housing;
