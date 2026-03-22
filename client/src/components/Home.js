import { useRef } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Career from "./Career";
import SkillPill from "./SkillPill";
import Recommendations from "./Recommendations";
import Thanks from "./Thanks";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompassDrafting,
  faTimeline,
  faScrewdriverWrench,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import confetti from "canvas-confetti";
import { recommendations } from "../data/recommendations";

const Home = () => {
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
    <>
      {/* INTRO SECTION */}
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
          <span id="pill-text">Currently busy</span>
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
          , a full-stack product&nbsp;
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
          with a strong front-end focus.
        </p>
        <div className="contact-buttons">
          <Contact />
        </div>
      </header>

      <main id="main-content">
        {/* PORTFOLIO SECTION */}
        <section>
          <div id="title-container">
            <h2>
              <FontAwesomeIcon className="icon" icon={faCompassDrafting} />
              Selected Projects
            </h2>
            <p className="para">
              These are some key projects and side hustles I have worked on, building from scratch
              across the front and back-end:
            </p>
          </div>

          <div id="portfolio-container">
            <Portfolio />
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <div id="title-container">
            <h2>
              <FontAwesomeIcon className="icon" icon={faScrewdriverWrench} />
              Key Skills
            </h2>
            <p className="para">
              Here are a few of the key languages, frameworks, and tools that I have been using, and
              will continue to add as I learn:
            </p>
          </div>
          <SkillPill selectedSkills={"all"} />
        </section>

        {/* RECOMMENDATION SECTION */}
        <section>
          <div id="title-container">
            <h2>
              <FontAwesomeIcon className="icon" icon={faCommentDots} />
              Recommendations
            </h2>
            <p className="para">
              A few kind words from the brilliant people I’ve had the privilege to work with
              throughout my career:
            </p>
          </div>
          <Recommendations items={recommendations} />
        </section>

        {/* TIMELINE SECTION */}
        <section>
          <div id="title-container">
            <h2>
              <FontAwesomeIcon className="icon" icon={faTimeline} />
              Career Timeline
            </h2>
            <p className="para">
              I wasn&apos;t always a developer! I have over a decade of experience working in
              technology on some awesome projects:{" "}
            </p>
          </div>

          <div id="timeline-container">
            <Career />
          </div>
        </section>

        {/* THANKS SECTION */}
        <section>
          <Thanks />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
