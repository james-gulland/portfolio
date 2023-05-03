import profilePic from '../assets/me.jpg'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Career from './Career'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompassDrafting, faTimeline } from '@fortawesome/free-solid-svg-icons'
import confetti from 'canvas-confetti'

const Home = () => {

  // little easter egg ;)
  function handleClick() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        x: 0.83,
        y: 0.15,
      },
    })
  }

  return (
    <>
      {/* INTRO SECTION */}
      <header id="intro-container">
        <div id="current-status" className="pill" onClick={handleClick}><span id="pill-emoji">☻</span> Open to work</div>
        <div id="profile-pic">
          <img src={profilePic} alt="Profile" />
        </div>
        <p className="heading">Hello there!</p>
        <p id="profile-description" className="heading">I&apos;m James, a full-stack junior&nbsp;  
          {/* LET'S BOUNCE MY FRIENDS */}
          <div id="bounce-text"> 
            <span className="accent-colour letter">d</span>
            <span className="accent-colour letter">e</span>
            <span className="accent-colour letter">v</span>
            <span className="accent-colour letter">e</span>
            <span className="accent-colour letter">l</span>
            <span className="accent-colour letter">o</span>
            <span className="accent-colour letter">p</span>
            <span className="accent-colour letter">e</span>
            <span className="accent-colour letter">r</span>
          </div> with a background in product management.</p>
        <div className="contact-buttons">
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

        {/* THANKS SECTION */}
        <section>
          <div id="thanks-container">
            <div id="profile-pic">
              <img src={profilePic} alt="Profile" />
            </div>
            <div id="thanks-copy-container">
              <h3>Thanks!</h3>
              <p>Thanks for making it down this far. It was quite the journey! Hit me up using the links below to contact me for developer roles. Muchos gracias.</p>
              <div className="contact-buttons"><Contact /></div>
            </div>
          </div>
        </section>

        <footer>
          <p>This site was made from scratch using my bare hands and half a brain, thanks to React.js, JavaScript, and SASS.</p>
        </footer>

      </main>
    
    </>

  )
}

export default Home