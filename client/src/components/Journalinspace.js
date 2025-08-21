import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import Back from "./Back";
import SkillPill from "./SkillPill";
import Thanks from "./Thanks";
import Footer from "./Footer";
import { MacEmulator } from "./MacEmulator";
import journalInSpaceVideo from "../assets/journalinspace.mp4";
import nasaMobVideo from "../assets/nasa-mob.mp4";

const Journalinspace = () => {
  const selectedSkills = ["JavaScript", "React", "HTML5", "SASS", "Node.js"];

  return (
    <>
      <header id="header-about">
        <Back />
      </header>

      <main>
        {/* TITLE */}
        <section>
          <div id="title-container">
            <h1>Journal in Space</h1>
            <p className="para">
              Developed a React app that consumed the NASA Picture of the Day API, to resemble a
              daily journal through space
            </p>
          </div>

          {/* HERO AREA */}
          <div className="portfolio-hero-container" style={{ marginTop: "3rem" }}>
            <MacEmulator>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  maxWidth: "100%",
                  margin: "0 auto",
                  display: "block",
                }}
              >
                <source src={journalInSpaceVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </MacEmulator>
            <div className="links-container">
              <ul>
                <Link to="https://journalinspace.com/" target="_blank" rel="noopener noreferrer">
                  <li className="pill active">
                    <FontAwesomeIcon className="icon" icon={faEarthAmericas} alt="GitHub" />
                    Link to Website
                  </li>
                </Link>
                <Link
                  to="https://github.com/james-gulland/space/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="pill active">
                    <FontAwesomeIcon className="icon" icon={faGithub} alt="GitHub" />
                    Link to GitHub
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </section>

        {/* MAIN COPY */}
        <section className="portfolio-copy" style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ flex: "1", minWidth: "18.75rem" }}>
            <p className="para black">
              This is an older project that I am still rather fond of! It was built during my time
              on the General Assembly Software Engineering bootcamp, where the brief was simply to
              build a React app that consumed an API.
            </p>
            <p className="para black">
              We chose an Open API provided by NASA called Astronomy Picture of the Day (APOD),
              which updates daily with NASA photography, an explanation, along with other data, that
              we would display in our React app and then deploy to the web.
            </p>
            <p className="para black">
              You can read up more about the full development process{" "}
              <span className="link">
                <Link
                  to="https://github.com/james-gulland/space/#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </Link>
              </span>
              .
            </p>
          </div>
          <div style={{ margin: "0 auto" }}>
            <MacEmulator>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  maxWidth: "20rem",
                  display: "block",
                }}
              >
                <source src={nasaMobVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </MacEmulator>
          </div>
        </section>

        {/* TECH USED SECTION */}
        <section>
          <h2>Technologies Used:</h2>
          <SkillPill selectedSkills={selectedSkills} />
        </section>

        {/* THANKS SECTION */}
        <section>
          <Thanks />
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Journalinspace;
