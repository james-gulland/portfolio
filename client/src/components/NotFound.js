import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Meta from "./Meta";

const NotFound = () => {
  return (
    <>
      <Meta title="404" description="Page not found on the James Gulland portfolio website." />

      <main id="main-content" className="not-found">
        <div className="not-found-content">
          <FontAwesomeIcon icon={faTriangleExclamation} className="not-found-icon" />
          <h1>I AM DISAPPOINT.</h1>
          <h2>404 - Page Not Found</h2>
          <p>The page you're looking for doesn't exist.</p>
          <Link to="/" className="not-found-button">
            Take me home!
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
