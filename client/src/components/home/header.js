import { Link } from "react-router-dom";
import Contact from "../common/contact";
import ThemeToggle from "../common/theme-toggle";

const Header = () => {
  return (
    <header id="intro-container">
      <ThemeToggle />
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
