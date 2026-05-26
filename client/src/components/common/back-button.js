import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Back = () => {
  return (
    <Link className="profile" to={"/"} as={Link}>
      <button className="main-action">
        <FontAwesomeIcon className="icon" icon={faArrowLeft} />
        Back to home
      </button>
    </Link>
  );
};

export default Back;
