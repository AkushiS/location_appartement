import { Link } from "react-router";

function Card({ id, title, image }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </Link>
  );
}

export default Card;
