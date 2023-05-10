import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Back = () => {

  return (
    <Link className="profile" to={'/'} as={Link}>
      <div className="button back"><FontAwesomeIcon className="icon" icon={faArrowLeft} />Back to home</div>
    </Link>

  )
}

export default Back