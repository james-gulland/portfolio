import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <a className="main-action" href="mailto:jamesgulland@gmail.com">
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
        Email
      </a>
      <a
        className="main-action"
        href="https://www.linkedin.com/in/jamesgulland/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
        LinkedIn
      </a>
      <a
        className="main-action"
        href="https://github.com/james-gulland/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="icon" icon={faGithub} />
        GitHub
      </a>
    </>
  );
};

export default Contact;
