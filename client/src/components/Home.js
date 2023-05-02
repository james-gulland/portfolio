import profilePic from '../assets/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <div id="intro-container">
        <div id="current-status" className="pill"><span id="pill-emoji">☻</span> Open to work</div>
        <div id="profile-pic">
          <img src={profilePic} alt="Profile" />
        </div>
        <p className="heading">Hello there!</p>
        <p id="profile-description" className="heading">I&apos;m James, a full-stack <span className="accent-colour">developer</span> with a background in product management.</p>
        <div id="contact-buttons">
          <Link className="profile" to={'mailto:jamesgulland@gmail.com'} as={Link}>
            <div id="contact-email" className="button"><FontAwesomeIcon className="icon" icon={faEnvelope} />Email</div>
          </Link>
          <Link className="profile" to={'https://www.linkedin.com/in/jamesgulland/'} as={Link}>
            <div id="contact-linkedIn" className="button"><FontAwesomeIcon className="icon" icon={faLinkedin} />LinkedIn</div>
          </Link>
        </div>
      </div>
    
    </>

  )
}

export default Home