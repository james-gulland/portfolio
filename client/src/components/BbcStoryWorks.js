import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import Back from "./Back";
import SkillPill from "./SkillPill";
import Thanks from "./Thanks";
import Footer from "./Footer";
import { MacEmulator } from "./MacEmulator";

const BbcStoryWorks = () => {
  const selectedSkills = ["Next.js", "TypeScript", "React", "HTML5", "Tailwind", "Node.js"];

  return (
    <>
      <header id="header-about">
        <Back />
      </header>

      <main>
        {/* TITLE */}
        <section>
          <div id="title-container">
            <h1>BBC StoryWorks</h1>
            <p className="para">
              A collection of projects from the prestigious BBC StoryWorks division.
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
                <source
                  src="https://node-london-eu.s3.eu-west-1.amazonaws.com/The%20Climate%20and%20Us.mp4"
                  type="video/mp4"
                />
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
        <section className="portfolio-copy">
          <p className="para black">
            During my time at node london, I worked on numerous projects for the BBC StoryWorks
            division, which is the commercial arm of the BBC. I often led the development of these
            projects, collaborating closely with the BBC team to ensure we met their high standards
            and expectations.
          </p>
          <p className="para black">
            The projects I worked on were diverse, ranging from interactive storytelling platforms
            to multimedia content hubs. Each project required a unique approach, and I enjoyed the
            challenge of adapting to the specific needs of the project, while maintaining the
            quality and performance that node london is known for.
          </p>
          <p className="para black">
            Typically, the projects I worked on were built using a combination of Next.js and
            TypeScript, leveraging the power of React for dynamic user interfaces. I also utilised
            Tailwind CSS for styling and Node.js for server-side functionality. To bring pages to
            life and create engaging experiences, the GSAP animation library was often used,
            implementing scroll-triggered animations that enhanced storytelling and kept users
            engaged.  The projects were hosted on AWS or Vercel, ensuring scalability and
            reliability.
          </p>
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

export default BbcStoryWorks;
