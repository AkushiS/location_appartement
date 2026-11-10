import { useState } from "react";
import arrow from "../assets/arrow_back.png";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header">
        <h2>{title}</h2>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={`${isOpen ? "Fermer" : "Ouvrir"} ${title}`}
        >
          <img src={arrow} alt="" className={isOpen ? "arrow-open" : ""} />
        </button>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        <div className="collapse-content-inner">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
