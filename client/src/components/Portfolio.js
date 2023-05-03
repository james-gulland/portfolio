import { Link } from 'react-router-dom'
import spectrumScreen from '../assets/spectrum-demo.png'
import wanderlust from '../assets/wanderlust-crop.png'
import battleships from '../assets/battleships.png'
import journalinspace from '../assets/journalinspace.png'

const Portfolio = () => {

  return (
    <>
      {/* 1ST ITEM */}
      <div className="portfolio-item tile-large">
        <Link to="https://spectrum.gives/" target="_blank" rel="noopener noreferrer"> 
          <div className="tile-centre">  
            <h3>spectrum</h3>
            <p className="tile-text">Music app that brings together all your favourite mixes from around the web, including Soundcloud and Youtube.</p>
            <p className="tile-text">Built a full-stack app from scratch using Python and Django to serve data from a PostgreSQL database, which was then consumed by React.js app.</p>
          </div>
        </Link>
        <Link to="https://spectrum.gives/" target="_blank" rel="noopener noreferrer">
          <div className="tile-right">
            <img id="spectrum-screen" src={spectrumScreen} alt="Spectrum" />
          </div>
        </Link>
      </div>

      {/* 2ND ITEM */}
      <div className="portfolio-item tile-small">
        <Link to="https://wanderlust-project-3.herokuapp.com/" target="_blank" rel="noopener noreferrer"> 
          <div className="tile-vertical">
            <h3>Wanderlust</h3>
            <p className="tile-text">Travel website that displays the best destinations based on the current weather in that location right now</p>
          </div>
          <div id="image-container">
            <img id="wanderlust-screen" src={wanderlust} alt="Wanderlust" />
          </div>
        </Link>
      </div>

      {/* 3RD ITEM */}
      <div className="portfolio-item tile-small">
        <Link to="https://james-gulland.github.io/battleships/" target="_blank" rel="noopener noreferrer">
          <div className="tile-vertical">
            <h3>Celebrity Battleships</h3>
            <p className="tile-text">A tongue-in-cheek battleships game featuring celebrity dictators, built with JavaScript, HTML5 and CSS.</p>
          </div>
          <div id="image-container">
            <img id="battleships-screen" src={battleships} alt="Wanderlust" />
          </div>
        </Link>
      </div>

      {/* 4TH ITEM */}
      <div className="portfolio-item tile-large">
        <Link to="https://journalinspace.com/" target="_blank" rel="noopener noreferrer"> 
          <div className="tile-left">
            <img id="spectrum-screen" src={journalinspace} alt="Spectrum" />
          </div>
        </Link>

        <Link to="https://journalinspace.com/" target="_blank" rel="noopener noreferrer"> 
          <div className="tile-centre">
            <h3>Journal in Space</h3>
            <p className="tile-text">Experience a daily voyage through space, directly from NASA.</p>
            <p className="tile-text">Developed a React.js app that consumed the official NASA Picture of the Day API, to resemble a daily journal through space.</p>
          </div>
        </Link>
      </div>
    </>
  )

}

export default Portfolio