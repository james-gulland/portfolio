import Portfolio from "../portfolio";
import Header from "./header";
import Career from "./career";
import SkillPill from "../common/skill-pill";
import Recommendations from "./recommendations";
import Thanks from "../common/thanks";
import Footer from "../common/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompassDrafting,
  faTimeline,
  faScrewdriverWrench,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { recommendations } from "../../data/recommendations";

const Home = () => {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* PORTFOLIO SECTION */}
        <section>
          <div id="title-container">
            <h2>
              <FontAwesomeIcon className="icon" icon={faCompassDrafting} />
              Selected Projects
            </h2>
            <p className="subtitle">
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
            <p className="subtitle">
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
            <p className="subtitle">
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
            <p className="subtitle">
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
