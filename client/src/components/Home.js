import profilePic from '../assets/me.jpg'
import Contact from './Contact'
import Portfolio from './Portfolio'
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
            <Portfolio />
          </div>




        </section>
      </main>
    
    </>

  )
}

export default Home