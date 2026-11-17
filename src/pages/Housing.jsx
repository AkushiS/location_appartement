import { useParams, Navigate } from "react-router";
import { useState, useEffect } from "react";
import Slideshow from "../components/Slideshow";
import star from "../assets/star.png";
import Collapse from "../components/Collapse";

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
    return <Navigate to="/404" replace />;
  }

  return (
    <main>
      {logement && <Slideshow pictures={logement.pictures} />}

      {logement && (
        <div className="housing-details">
          <div className="housing-info">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>

            <div className="housing-tags">
              {logement.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="housing-owner">
            <div className="housing-host">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={`Photo de ${logement.host.name}`} />
            </div>

            <div className="housing-rating">
              {Array.from({ length: 5 }, (_, index) => (
                <img
                  key={index}
                  src={star}
                  alt=""
                  className={index < Number(logement.rating) ? "star-active" : "star-inactive"}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {logement && (
        <div className="housing-collapses">
          <Collapse title="Description" content={logement.description} />

          <Collapse title="Équipements" content={logement.equipments.join("\n")} />
        </div>
      )}
    </main>
  );
}

export default Housing;
