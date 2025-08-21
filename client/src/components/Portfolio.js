import { Link } from 'react-router-dom'
import spectrumScreen from '../assets/spectrum-demo.png'
import bbcStoryWorks from '../assets/bbc-storyworks.png'
import wanderlust from '../assets/wanderlust-crop.png'
import battleships from '../assets/battleships.png'
// import journalinspace from '../assets/journalinspace.png'
import fortyFi from '../assets/40fi-2.png'
import journalinspace from '../assets/nasa.png'
import allThree from '../assets/all3.png'

const Portfolio = () => {

  return (
    <>
      {/* 1ST ITEM */}
      <Link to="/bbc-storyworks" as={Link} className="portfolio-item tile-large"> 
        <div className="tile-centre">  
          <h3>BBC StoryWorks</h3>
          <p className="tile-text">A collection of projects for the prestigious BBC StoryWorks division.</p>
          <p className="tile-text">Highly interactive, timeline-driven web experiences powered by the GSAP animation library, Next.js, TypeScript, and Tailwind.</p>
        </div>
        <div className="tile-right">
          <img id="first-screen" src={bbcStoryWorks} alt="Spectrum" />
        </div>
      </Link>

      {/* 2ND ITEM */}
      <div className="portfolio-item tile-small">
        <Link to="/40fi" as={Link}> 
          <div className="tile-vertical">
            <h3>40fi</h3>
            <p className="tile-text">Overhaul of 40fis website, content powered by Payload CMS integration with Next.js, TypeScript and Tailwind.</p>
          </div>
          <div id="image-container">
            <img id="second-screen" src={fortyFi} alt="40fi" />
          </div>
        </Link>
      </div>

      {/* 3RD ITEM */}
      <Link to="/journalinspace" as={Link} className="portfolio-item tile-small">
        <div className="tile-vertical">
          <h3>Journal in Space</h3>
          <p className="tile-text">Experience a daily voyage through space. Built with React, fueled by the NASA Picture of the Day API.</p>
        </div>
        <div id="image-container">
          <img id="second-screen" src={journalinspace} alt="Journal In Space screenshot" />
        </div>
      </Link>

      {/* 4TH ITEM */}
      <Link to="/all3media" as={Link} className="portfolio-item tile-large"> 
        <div className="tile-left">
          <img id="last-screen" src={allThree} alt="All3Media screenshot" />
        </div>
        <div className="tile-centre">
          <h3>All3Media</h3>
          <p className="tile-text">Rebuild of All3Medias web experience using Next.js and WordPress CMS.</p>
          <p className="tile-text">Full-stack integration of CMS back-end, in addition to complex timeline-driven scroll animations throughout. </p>
        </div>
      </Link>
    </>
  )

}

export default Portfolio