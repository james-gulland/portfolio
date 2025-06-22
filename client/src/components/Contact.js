import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Contact = () => {

  return (
    <>
      <a className="profile" href='mailto:jamesgulland@gmail.com'>
        <div className="button contact-email"><FontAwesomeIcon className="icon" icon={faEnvelope} />Email</div>
      </a>
      <Link className="profile" to={'https://www.linkedin.com/in/jamesgulland/'} target="_blank" rel="noopener noreferrer">
        <div className="button contact-linkedIn"><FontAwesomeIcon className="icon" icon={faLinkedin} />LinkedIn</div>
      </Link>
      <Link className="profile" to={'https://github.com/james-gulland/'} target="_blank" rel="noopener noreferrer">
        <div className="button contact-github"><FontAwesomeIcon className="icon" icon={faGithub} />GitHub</div>
      </Link>
    </>
  )
}

export default Contact