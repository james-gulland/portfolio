import Back from './Back'
import screen1 from '../assets/spectrum-1.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import SkillPill from './SkillPill'
import Thanks from './Thanks'

const Spectrum = () => {

  const selectedSkills = ['React.js', 'HTML5', 'SASS', 'Python', 'Django', 'PostgreSQL']

  return (
    <>
      <header id="header-about">
        <Back />
      </header>

      {/* TITLE */}
      <section>
        <div id="title-container">
          <h1>spectrum</h1>
          <p className="para">Music app that brings together all your favourite mixes from around the web, including Soundcloud and Youtube</p>
        </div>

        {/* HERO AREA */}
        <div className="portfolio-hero-container">
          <img className="hero-image" src={screen1} alt="Spectrum Home" ></img>
          <div>
            <ul>
              <Link to="https://spectrum.gives/" target="_blank" rel="noopener noreferrer">
                <li className="pill active"><FontAwesomeIcon className="icon" icon={faEarthAmericas} alt="GitHub" />Link to Website</li>
              </Link>
              <Link to="https://github.com/james-gulland/spectrum/" target="_blank" rel="noopener noreferrer">
                <li className="pill active"><FontAwesomeIcon className="icon" icon={faGithub} alt="GitHub" />Link to GitHub</li>
              </Link>
            </ul>
          </div>
        </div>
      </section>

      {/* MAIN COPY */}
      <section className="portfolio-copy">
        <p className="para black">During the final two weeks of the GA Software Engineering immersive course, I was tasked with developing a full-stack app from scratch using a Python Django API and Django REST framework to serve data from a Postgres database, which was then consumed by a separate front-end build with React.js and SASS.</p>
        <p className="para black">I came up with the idea of a project I have always wanted to do; a music app that enables users to curate a personalised playlist of mixtapes from various online sources, including Youtube, Soundcloud, and Mixcloud; a central repository for all your mixes! The app also allows for playback of the playlist based on the user&apos;s present mood.</p>
        <p className="para black">You can read up more about the full development process <Link to="https://github.com/james-gulland/spectrum/#readme" target="_blank" rel="noopener noreferrer" id="link">here</Link>.</p>
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

      {/* FOOTER */}
      <footer>
        <p>This site was made from scratch using my bare hands and half a brain, thanks to React.js, JavaScript, and SASS.</p>
      </footer>
    </>
  )

}

export default Spectrum