import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      {/* 1ST ITEM */}
      <Link to="/bbc-storyworks" as={Link} className="portfolio-item tile-large">
        <div className="tile-centre">
          <h3>BBC StoryWorks</h3>
          <p className="tile-text">
            A collection of projects for the prestigious BBC StoryWorks division.
          </p>
          <p className="tile-text">
            Highly interactive, timeline-driven web experiences powered by the GSAP animation
            library, Next.js, TypeScript, and Tailwind.
          </p>
        </div>
        <div className="tile-right">
          <img
            id="first-screen"
            src="https://res.cloudinary.com/drrscrxod/image/upload/q_auto/f_auto/bbc-storyworks_wzdowj.webp"
            alt="BBC StoryWorks portfolio screenshot"
          />
        </div>
      </Link>

      {/* 2ND ITEM */}
      <Link to="/40fi" as={Link} className="portfolio-item tile-small">
        <div className="tile-vertical">
          <h3>40fi</h3>
          <p className="tile-text">
            Overhaul of 40fi&#39;s website, content powered by Payload CMS integration with Next.js,
            TypeScript and Tailwind.
          </p>
        </div>
        <div id="image-container">
          <img
            id="second-screen"
            src="https://res.cloudinary.com/drrscrxod/image/upload/q_auto/f_auto/40fi-2_rko0jp.webp"
            alt="40fi portfolio screenshot"
          />
        </div>
      </Link>

      {/* 3RD ITEM */}
      <Link to="/journalinspace" as={Link} className="portfolio-item tile-small">
        <div className="tile-vertical">
          <h3>Journal in Space</h3>
          <p className="tile-text">
            Experience a daily voyage through space. Built with React, fueled by the NASA Picture of
            the Day API.
          </p>
        </div>
        <div id="image-container">
          <img
            id="second-screen"
            src="https://res.cloudinary.com/drrscrxod/image/upload/q_auto/f_auto/nasa_ebkrss.webp"
            alt="Journal In Space portfolio screenshot"
          />
        </div>
      </Link>

      {/* 4TH ITEM */}
      <Link to="/eventogy" as={Link} className="portfolio-item tile-large">
        <div className="tile-left">
          <img
            id="last-screen"
            src="https://res.cloudinary.com/drrscrxod/image/upload/q_auto/f_auto/eventogy-table_c8zqlj.avif"
            alt="Eventogy portfolio screenshot"
          />
        </div>
        <div className="tile-centre">
          <h3>Eventogy</h3>
          <p className="tile-text">
            Rebuild of Eventogy&#39;s SaaS platform from the ground up using Next.js 15 and React
            19.
          </p>
          <p className="tile-text">
            Fast, responsive interface that could handle complex, data-heavy workflows without
            feeling clunky.
          </p>
        </div>
      </Link>
    </>
  );
};

export default Portfolio;
