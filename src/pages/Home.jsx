import Banner from "../components/Banner";
import bannerHome from "../assets/image_home.svg";

function Home() {
  return (
    <main>
      <Banner title="Chez vous, partout et ailleurs" image={bannerHome} />
    </main>
  );
}

export default Home;
