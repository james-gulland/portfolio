import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import Back from './Back'
import SkillPill from './SkillPill'
import Thanks from './Thanks'
import Footer from './Footer'
import screen1 from '../assets/space-1.png'

const Journalinspace = () => {

  const selectedSkills = ['JavaScript', 'React.js', 'HTML5', 'SASS', 'Node.js']

  return (
    <>
      <header id="header-about">
        <Back />
      </header>

      <main>
        {/* TITLE */}
        <section>
          <div id="title-container">
            <h1>Journal in Space</h1>
            <p className="para">Developed a React.js app that consumed the NASA Picture of the Day API, to resemble a daily journal through space</p>
          </div>

          {/* HERO AREA */}
          <div className="portfolio-hero-container">
            <img className="hero-image" src={screen1} alt="Spectrum Home" ></img>
            <div className="links-container">
              <ul>
                <Link to="https://journalinspace.com/" target="_blank" rel="noopener noreferrer">
                  <li className="pill active"><FontAwesomeIcon className="icon" icon={faEarthAmericas} alt="GitHub" />Link to Website</li>
                </Link>
                <Link to="https://github.com/james-gulland/space/" target="_blank" rel="noopener noreferrer">
                  <li className="pill active"><FontAwesomeIcon className="icon" icon={faGithub} alt="GitHub" />Link to GitHub</li>
                </Link>
              </ul>
            </div>
          </div>
        </section>

        {/* MAIN COPY */}
        <section className="portfolio-copy">
          <p className="para black">The second GA Software Engineering immersive course project was in week 7 of the course, with the brief of building a React app that consumes a public API.</p>
          <p className="para black">We chose an Open API provided by NASA called Astronomy Picture of the Day (APOD), which updates daily with NASA photography, an explanation, along with other data, that we would display in our React app and then deploy to the web.</p>
          <p className="para black">You can read up more about the full development process <span className="link"><Link to="https://github.com/james-gulland/space/#readme" target="_blank" rel="noopener noreferrer">here</Link></span>.</p>
        </section>

        {/* TECH USED SECTION */}
        <section>
          <h2>Technologies Used:</h2>
          <SkillPill selectedSkills={selectedSkills} />
        </section>

        {/* THANKS SECTION */}
        <section>
          <Thanks />
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>

  )
}

export default Journalinspace