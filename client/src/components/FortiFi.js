import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import Back from "./Back";
import SkillPill from "./SkillPill";
import Thanks from "./Thanks";
import Footer from "./Footer";
import { MacEmulator } from "./MacEmulator";
import fortyFi from "../assets/40fi.png";
import fortyFiContact from "../assets/40fi-contact.png";
import fortyFiResources from "../assets/40fi-resource.png";

const FortiFi = () => {
  const selectedSkills = [
    "Next.js",
    "TypeScript",
    "React",
    "HTML5",
    "Tailwind",
    "Node.js",
    "AWS",
    "Vercel",
    "Payload CMS",
    "PostgreSQL",
  ];

  return (
    <>
      <header id="header-about">
        <Back />
      </header>

      <main>
        {/* TITLE */}
        <section>
          <div id="title-container" style={{ gap: "2rem" }}>
            <h1>40fi</h1>
            <p className="para">
              Overhaul of 40fi&#39;s website, content powered by Payload CMS integration with
              Next.js, TypeScript and Tailwind.
            </p>
          </div>

          {/* HERO AREA */}
          <div className="portfolio-hero-container" style={{ marginTop: "3rem" }}>
            <MacEmulator>
              <img src={fortyFi} alt="40fi screenshot" style={{ width: "100%", height: "auto" }} />
            </MacEmulator>

            <div className="links-container">
              <ul>
                <Link to="https://www.40fi.net/" target="_blank" rel="noopener noreferrer">
                  <li className="pill active">
                    <FontAwesomeIcon className="icon" icon={faEarthAmericas} alt="GitHub" />
                    40fi.net
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </section>

        {/* MAIN COPY */}
        <section className="portfolio-copy">
          <p className="para black">
            40fi came to node london with a need for a complete overhaul of their website. The goal
            was to create a modern, responsive website that showcased their services and expertise
            in the security industry, whilst enabling them to easily manage content through a new
            Payload CMS integration.
          </p>
          <p className="para black">
            The project involved a complete redesign and development of the website using Next.js,
            TypeScript, and Tailwind CSS. The new site features a clean, modern design that is fully
            responsive, ensuring a seamless user experience across all devices.
          </p>
          <p className="para black">
            Beyond front-end development, I worked across the stack to deliver a robust integration
            with Payload CMS. This included designing and implementing the API calls, defining the
            content models, and migrating and structuring the PostgreSQL database that sat behind
            the Payload CMS integration.
          </p>
          <p className="para black">
            The integration with Payload CMS now allows 40fi to easily manage their content,
            including blog posts, service pages, and case studies, without needing to rely on a
            developer for every update.
          </p>
        </section>

        {/* IMAGES AND LINKS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "flex-start",
            marginBottom: "2rem",
            marginTop: "6rem",
          }}
        >
          <MacEmulator>
            <img
              src={fortyFiContact}
              alt="40fi contact page screenshot"
              style={{
                height: "28.25rem",
                width: "auto",
                objectFit: "fill",
                display: "block",
              }}
            />
          </MacEmulator>

          <img
            src={fortyFiResources}
            alt="40fi resources page screenshot"
            style={{
              height: "30rem",
              width: "auto",
              display: "block",
              filter: "drop-shadow(15px 10px 4px rgba(0, 0, 0, 0.15))",
            }}
          />
        </div>

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

export default FortiFi;
