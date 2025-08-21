import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import Back from "./Back";
import SkillPill from "./SkillPill";
import Thanks from "./Thanks";
import Footer from "./Footer";
import { MacEmulator } from "./MacEmulator";
import all3media from "../assets/all3media.png";
import all3video from "../assets/all3-video.mp4";

const All3Media = () => {
  const selectedSkills = [
    "Next.js",
    "TypeScript",
    "React",
    "HTML5",
    "Tailwind",
    "Node.js",
    "AWS",
    "WordPress",
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
            <h1>All3Media</h1>
            <p className="para">
              Rebuild of All3Medias web experience using Next.js and WordPress CMS.
            </p>
          </div>

          {/* HERO AREA */}
          <div className="portfolio-hero-container" style={{ marginTop: "3rem" }}>
            <MacEmulator>
              <img
                src={all3media}
                alt="All3Media screenshot"
                style={{ width: "100%", height: "auto" }}
              />
            </MacEmulator>

            <div className="links-container">
              <ul>
                <Link to="https://all3media.com/" target="_blank" rel="noopener noreferrer">
                  <li className="pill active">
                    <FontAwesomeIcon className="icon" icon={faEarthAmericas} alt="GitHub" />
                    All3Media
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </section>

        {/* MAIN COPY */}
        <section className="portfolio-copy">
          <p className="para black">
            All3Media partnered with node london to transform their website into a modern, engaging
            platform that better reflected their global presence in the media industry. The goal was
            to create a visually striking, responsive website that not only showcased their
            extensive content library but also gave their team the ability to manage content
            seamlessly through a WordPress CMS integration.
          </p>
          <p className="para black">
            The project involved a complete redesign and build using Next.js, TypeScript, and
            Tailwind CSS. We placed a strong emphasis on interaction and storytelling, implementing
            GSAP-powered, scroll-triggered animations throughout the site. These animations added
            depth and energy to the user experience, helping to bring All3Media’s brand and content
            to life in a dynamic way.
          </p>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://node-london-eu.s3.eu-west-1.amazonaws.com/all_3_poster.jpg"
            style={{
              width: "100%",
              borderRadius: "20px",
              maxHeight: "25rem",
              objectFit: "cover",
              marginTop: "2rem",
            }}
          >
            <source
              src="https://node-london-eu.s3.eu-west-1.amazonaws.com/All3.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <p className="para black">
            On the back end, I worked across the stack to integrate WordPress as a headless CMS,
            setting up API endpoints to fetch and deliver structured content efficiently. This
            allowed for smooth content updates while keeping the performance and flexibility of a
            modern front-end stack.
          </p>
          <p className="para black">
            The result is a content-rich, animation-driven website that gives All3Media full control
            over their publishing workflow while delivering a polished, engaging experience for
            their audience.
          </p>
        </section>

        {/* IMAGES AND LINKS */}
        <div className="two-col-content">
          <MacEmulator>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%"
              }}
            >
              <source src={all3video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </MacEmulator>
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

export default All3Media;
