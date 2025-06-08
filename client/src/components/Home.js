import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import profilePic from '../assets/me.jpg'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Career from './Career'
import SkillPill from './SkillPill'
import Thanks from './Thanks'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompassDrafting, faTimeline, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import confetti from 'canvas-confetti'

const Home = () => {

  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    Promise.all(profilePic)
      .then(() => setImgLoaded(true))
      .catch(err => console.log('Failed to load image', err))
  }, [])

  const containerRef = useRef(null)

  // little easter egg ;)
  function handleClick() {

    const container = containerRef.current
    const left = (1 - (container.offsetLeft / window.innerWidth)) - 0.05
    const top = container.offsetTop / container.offsetHeight

    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        x: left,
        y: top,
      },
    })
    
  }

  return (
    <>
      {/* INTRO SECTION */}
      <header id="intro-container" ref={containerRef}>
        <div id="current-status" className="pill active" onClick={handleClick}><span id="pill-emoji" >☺️</span> Currently busy</div>
        <div id="profile-pic">
          {imgLoaded ? (
            <Link to="/about">
              <img src={profilePic} alt="Profile" loading="lazy" />
            </Link>
          ) : (
            <Link to="/about"></Link>
          )}
        </div>
        <p className="heading">Hello there!</p>
        <p id="profile-description" className="heading">I&apos;m <span className="link"><Link to="/about">James</Link></span>, a full-stack web&nbsp;  
          {/* LET'S BOUNCE, MY FRIENDS */}
          <span id="bounce-text"> 
            <span className="accent-colour letter">d</span>
            <span className="accent-colour letter">e</span>
            <span className="accent-colour letter">v</span>
            <span className="accent-colour letter">e</span>
            <span className="accent-colour letter">l</span>
            <span className="accent-colour letter">o</span>
            <span className="accent-colour letter">p</span>
            <span className="accent-colour letter">e</span>
            <span className="accent-colour letter">r</span>
          </span> with a background in product management.</p>
        <div className="contact-buttons">
          <Contact />
        </div>
      </header>

      <main>
        {/* PORTFOLIO SECTION */}
        <section>
          <div id="title-container">
            <h2><FontAwesomeIcon className="icon" icon={faCompassDrafting} />Selected Projects</h2>
            <p className="para">These are the projects and side hustles I have been working on, building from scratch across the front and back-end:</p>
          </div>

          <div id="portfolio-container">
            <Portfolio />
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <div id="title-container">
            <h2><FontAwesomeIcon className="icon" icon={faScrewdriverWrench} />Key Skills</h2>
            <p className="para">Here are a few of the key languages and frameworks that I have been using, and will continue to add as I learn:</p>
          </div>
          <SkillPill selectedSkills={'all'} />
        </section>

        {/* TIMELINE SECTION */}
        <section>
          <div id="title-container">
            <h2><FontAwesomeIcon className="icon" icon={faTimeline} />Career Timeline</h2>
            <p className="para">I wasn&apos;t always a developer! I have over a decade of experience working in technology on some awesome projects: </p>
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

  )
}

export default Home