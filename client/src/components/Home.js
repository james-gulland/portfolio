import profilePic from '../assets/me.jpg'
import spectrumScreen from '../assets/spectrum-demo.png'
import wanderlust from '../assets/wanderlust-crop.png'
import Contact from './Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  return (
    <>
      <header id="intro-container">
        <div id="current-status" className="pill"><span id="pill-emoji">☻</span> Open to work</div>
        <div id="profile-pic">
          <img src={profilePic} alt="Profile" />
        </div>
        <p className="heading">Hello there!</p>
        <p id="profile-description" className="heading">I&apos;m James, a full-stack junior <span className="accent-colour">developer</span> with a background in product management.</p>
        <div id="contact-buttons">
          <Contact />
        </div>
      </header>

      <main>
        <section>
          <div id="title-container">
            <h2><FontAwesomeIcon className="icon" icon={faCompassDrafting} />Selected Projects</h2>
            <p className="para">Ive worked for a plethora of clients and companies on projects of all sizes. This is only a selection of some of the most recent ones.</p>
          </div>

          <div id="portfolio-container">
            <div className="portfolio-item tile-large">
              <div className="tile-centre">
                <h3>spectrum</h3>
                <p className="tile-text">Music app that brings together all your favourite mixes from around the web i.e. Soundcloud, Youtube</p>
              </div>
              <div>
                <img id="spectrum-screen" src={spectrumScreen} alt="Spectrum" />
              </div>
            </div>
            <div className="portfolio-item tile-small">
              <div className="tile-vertical">
                <h3>Wanderlust</h3>
                <p className="tile-text">Travel website that displays the best destinations based on the current weather in that location right now</p>
              </div>
              <div id="image-container">
                <img id="wanderlust-screen" src={wanderlust} alt="Wanderlust" />
              </div>
            </div>
            <div className="portfolio-item tile-small">Project Three</div>
            <div className="portfolio-item tile-large">Project Four</div>
          </div>




        </section>
      </main>
    
    </>

  )
}

export default Home