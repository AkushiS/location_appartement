import { useState, useEffect } from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";
import bannerHome from "../assets/image_home.svg";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error("Erreur API :", error));
  }, []);

  return (
    <main>
      <Banner title="Chez vous, partout et ailleurs" image={bannerHome} />

      <section className="logements">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            image={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
