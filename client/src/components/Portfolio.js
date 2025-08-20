import { Link } from 'react-router-dom'
import spectrumScreen from '../assets/spectrum-demo.png'
import bbcStoryWorks from '../assets/bbc-storyworks.png'
import wanderlust from '../assets/wanderlust-crop.png'
import battleships from '../assets/battleships.png'
import journalinspace from '../assets/journalinspace.png'
import fortyFi from '../assets/40fi-mob.png'

const Portfolio = () => {

  return (
    <>
      {/* 1ST ITEM */}
      <Link to="/spectrum" as={Link} className="portfolio-item tile-large"> 
        <div className="tile-centre">  
          <h3>BBC StoryWorks</h3>
          <p className="tile-text">A collection of projects from the prestigious BBC StoryWorks division.</p>
          <p className="tile-text">Highly interactive, timeline-driven web experiences powered by the GSAP animation library, Next.js, TypeScript, and Tailwind.</p>
        </div>
        <div className="tile-right">
          <img id="first-screen" src={bbcStoryWorks} alt="Spectrum" />
        </div>
      </Link>

      {/* 2ND ITEM */}
      <div className="portfolio-item tile-small">
        <Link to="/wanderlust" as={Link}> 
          <div className="tile-vertical">
            <h3>40fi</h3>
            <p className="tile-text">Overhaul of 40fis website, content powered by Payload CMS integration with Next.js, TypeScript and Tailwind.</p>
          </div>
          <div id="image-container">
            <img id="second-screen" src={fortyFi} alt="Wanderlust" />
          </div>
        </Link>
      </div>

      {/* 3RD ITEM */}
      <div className="portfolio-item tile-small">
        <Link to="/battleships" as={Link}>
          <div className="tile-vertical">
            <h3>Journal in Space</h3>
            <p className="tile-text">Experience a daily voyage through space, directly from NASA.</p>
          </div>
          <div id="image-container">
            <img id="battleships-screen" src={battleships} alt="Wanderlust" />
          </div>
        </Link>
      </div>

      {/* 4TH ITEM */}
      <div className="portfolio-item tile-large">
        <Link to="/journalinspace" as={Link}> 
          <div className="tile-left">
            <img id="first-screen" src={journalinspace} alt="Spectrum" />
          </div>
        </Link>

        <Link to="/journalinspace" as={Link}> 
          <div className="tile-centre">
            <h3>All3Media</h3>
            <p className="tile-text">Rebuild of All3Medias web experience from scratch.</p>
            <p className="tile-text">Timeline-driven GSAP animation throughout </p>
          </div>
        </Link>
      </div>
    </>
  )

}

export default Portfolio