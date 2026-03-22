import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import Back from "./Back";
import SkillPill from "./SkillPill";
import Thanks from "./Thanks";
import Footer from "./Footer";
import Meta from "./Meta";
import { MacEmulator } from "./MacEmulator";

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
      <Meta
        title="All3Media"
        description="Case study for the All3Media rebuild using Next.js, TypeScript, Tailwind, and headless WordPress CMS integration."
      />

      <header id="header-about">
        <Back />
      </header>

      <main id="main-content">
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
                src="https://res.cloudinary.com/drrscrxod/image/upload/q_auto/f_auto/all3media_gcxotg.webp"
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
            poster="https://res.cloudinary.com/drrscrxod/image/upload/c_scale,w_1000/q_auto/f_auto/all_3_poster_u7hlsa.webp"
            style={{
              width: "100%",
              borderRadius: "20px",
              maxHeight: "25rem",
              objectFit: "cover",
              marginTop: "2rem",
            }}
          >
            <source
              src="https://res.cloudinary.com/drrscrxod/video/upload/c_scale,w_1000/q_auto/f_auto/All3_bcdmno.mp4"
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
                width: "100%",
              }}
            >
              <source
                src="https://res.cloudinary.com/drrscrxod/video/upload/q_auto/f_auto/all3-video_qxxjmy.mp4"
                type="video/mp4"
              />
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
