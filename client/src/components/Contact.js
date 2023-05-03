import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Contact = () => {

  return (
    <>
      <Link className="profile" to={'mailto:jamesgulland@gmail.com'} as={Link} target="_blank">
        <div className="button contact-email"><FontAwesomeIcon className="icon" icon={faEnvelope} />Email</div>
      </Link>
      <Link className="profile" to={'https://www.linkedin.com/in/jamesgulland/'} as={Link} target="_blank">
        <div className="button contact-linkedIn"><FontAwesomeIcon className="icon" icon={faLinkedin} />LinkedIn</div>
      </Link>
    </>
  )
}

export default Contact