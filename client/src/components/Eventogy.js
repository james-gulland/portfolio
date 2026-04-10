import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import Back from "./Back";
import SkillPill from "./SkillPill";
import Thanks from "./Thanks";
import Footer from "./Footer";
import Meta from "./Meta";
import { MacEmulator } from "./MacEmulator";

const Eventogy = () => {
  const selectedSkills = ["Next.js", "TypeScript", "React", "HTML5", "Tailwind", "Node.js", "AWS"];

  return (
    <>
      <Meta
        title="Eventogy"
        description="Case study for the Eventogy website overhaul using Next.js, TypeScript, Tailwind, and Payload CMS integration."
      />

      <header id="header-about">
        <Back />
      </header>

      <main id="main-content">
        {/* TITLE */}
        <section>
          <div id="title-container" style={{ gap: "2rem" }}>
            <h1>Eventogy</h1>
            <p className="para">
              Rebuild of Eventogy&#39;s SaaS platform from the ground up using Next.js 15 and React
              19.
            </p>
          </div>

          {/* HERO AREA */}
          <div className="portfolio-hero-container" style={{ marginTop: "3rem" }}>
            <MacEmulator>
              <img
                src="https://res.cloudinary.com/drrscrxod/image/upload/q_auto/f_auto/eventogy-events_t3a8ul.webp"
                alt="Eventogy events screenshot"
                style={{ width: "100%", height: "auto" }}
              />
            </MacEmulator>

            <div className="links-container">
              <ul>
                <Link to="https://www.eventogy.com/" target="_blank" rel="noopener noreferrer">
                  <li className="pill active">
                    <FontAwesomeIcon className="icon" icon={faEarthAmericas} alt="GitHub" />
                    Eventogy.com
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </section>

        {/* MAIN COPY */}
        <section className="portfolio-copy">
          <p className="para black">
            During my time contracting with Eventogy, I played a key role in building the front-end
            of their next-generation SaaS events platform. This was a full v2 rebuild of the
            product, designed to scale for a growing enterprise client base, and I took ownership of
            the front-end architecture from the ground up.
          </p>
          <p className="para black">
            I worked with React 19 and Next.js 15 to shape a fast, responsive interface that could
            handle some pretty complex, data-heavy workflows without feeling clunky. A big part of
            my role was turning Figma designs into a reusable component system using TypeScript and
            Tailwind - making sure everything not only looked great and felt snappy, but was
            consistent and easy to build on as the product evolved.
          </p>

          <MacEmulator style={{ marginBlock: "4rem" }}>
            <img
              src="https://res.cloudinary.com/drrscrxod/image/upload/q_auto/f_auto/eventogy-table_c8zqlj.avif"
              alt="Eventogy table screenshot"
              style={{ width: "100%", height: "auto" }}
            />
          </MacEmulator>

          <p className="para black">
            Under the hood, I spent a lot of time thinking about how data moves through the app.
            Using Next.js server actions, server-side strategy techniques, and custom React hooks, I
            helped streamline data fetching and state management so the UI stayed smooth and
            predictable, even as things got more complex.
          </p>
          <p className="para black">
            It was a highly collaborative build - working closely with design, backend, and product
            managers throughout the process. We ended up with a platform that feels clean and
            intuitive on the surface, while doing a lot of heavy lifting behind the scenes.
          </p>
        </section>

        {/* IMAGES AND LINKS */}
        <MacEmulator style={{ marginBlock: "4rem" }}>
          <img
            src="https://res.cloudinary.com/drrscrxod/image/upload/q_auto/f_auto/eventogy-forms_y6aisi.webp"
            alt="Eventogy forms screenshot"
            style={{ width: "100%", height: "auto" }}
          />
        </MacEmulator>

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

export default Eventogy;
