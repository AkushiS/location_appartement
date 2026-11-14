import { useState } from "react";
import arrow from "../assets/arrow.png";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextSlide() {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  }

  function previousSlide() {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  }

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt="Photo du logement" />

      {pictures.length > 1 && (
        <>
          <button type="button" className="slideshow-prev" onClick={previousSlide} aria-label="Photo précédente">
            <img src={arrow} alt="" />
          </button>

          <button type="button" className="slideshow-next" onClick={nextSlide} aria-label="Photo suivante">
            <img src={arrow} alt="" />
          </button>

          <p className="slideshow-counter">
            {currentIndex + 1} / {pictures.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Slideshow;
