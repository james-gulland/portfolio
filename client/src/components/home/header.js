import confetti from "canvas-confetti";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Contact from "../common/contact";

const Header = () => {
  const containerRef = useRef(null);

  // little easter egg ;)
  function handleClick() {
    const container = containerRef.current;
    const left = 1 - container.offsetLeft / window.innerWidth - 0.05;
    const top = container.offsetTop / container.offsetHeight;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        x: left,
        y: top,
      },
    });
  }
  return (
    <header id="intro-container" ref={containerRef}>
      <button
        id="current-status"
        className="pill active"
        type="button"
        onClick={handleClick}
        aria-label="Currently busy status. Activate for confetti."
      >
        <span id="pill-emoji" aria-hidden="true">
          ☺️
        </span>
        <span id="pill-text">Available for hire!</span>
      </button>
      <div id="profile-pic" className="active">
        <Link to="/about" preload="true">
          <img
            src="https://res.cloudinary.com/drrscrxod/image/upload/c_scale,w_500/q_auto/f_auto/me_exxbpi.webp"
            width="128"
            height="128"
            alt="Profile"
          />
        </Link>
      </div>
      <h1 className="heading">Hello there!</h1>
      <p id="profile-description" className="heading">
        I&apos;m{" "}
        <span className="link">
          <Link to="/about">James</Link>
        </span>
        , a frontend product&nbsp;
        {/* LET'S BOUNCE, MY FRIENDS */}
        <span id="bounce-text">
          <span className="accent-colour letter">e</span>
          <span className="accent-colour letter">n</span>
          <span className="accent-colour letter">g</span>
          <span className="accent-colour letter">i</span>
          <span className="accent-colour letter">n</span>
          <span className="accent-colour letter">e</span>
          <span className="accent-colour letter">e</span>
          <span className="accent-colour letter">r</span>
        </span>{" "}
        with full-stack capabilities.
      </p>
      <div className="contact-buttons">
        <Contact />
      </div>
    </header>
  );
};

export default Header;
