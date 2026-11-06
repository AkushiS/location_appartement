function Banner({ title, image }) {
  return (
    <section className="banner">
      <img src={image} alt="Paysage" />
      <h1>{title}</h1>
    </section>
  );
}

export default Banner;
