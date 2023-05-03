import profilePic from '../assets/me.jpg'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Career from './Career'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompassDrafting, faTimeline } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  return (
    <>
      {/* INTRO SECTION */}
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
        {/* PORTFOLIO SECTION */}
        <section>
          <div id="title-container">
            <h2><FontAwesomeIcon className="icon" icon={faCompassDrafting} />Selected Projects</h2>
            <p className="para">Ive worked for a plethora of clients and companies on projects of all sizes. This is only a selection of some of the most recent ones.</p>
          </div>

          <div id="portfolio-container">
            <Portfolio />
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section>
          <div id="title-container">
            <h2><FontAwesomeIcon className="icon" icon={faTimeline} />Career Timeline</h2>
            <p className="para">I wasn&apos;t always a developer! I have over a decade of experience in product management, working on some cool projects: </p>
          </div>

          <div id="timeline-container">
            <Career />
          </div>

        </section>

      </main>
    
    </>

  )
}

export default Home