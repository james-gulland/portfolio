import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import Back from './Back'
import SkillPill from './SkillPill'
import Thanks from './Thanks'
import Footer from './Footer'
import screen1 from '../assets/wanderlust-1.png'

const Wanderlust = () => {

  const selectedSkills = ['JavaScript', 'React.js', 'HTML5', 'SASS', 'Node.js', 'MongoDB', 'Express']

  return (
    <>
      <header id="header-about">
        <Back />
      </header>

      <main>
        {/* TITLE */}
        <section>
          <div id="title-container">
            <h1>Wanderlust</h1>
            <p className="para">Travel website that displays the best destinations based on the current weather in that location right now</p>
          </div>

          {/* HERO AREA */}
          <div className="portfolio-hero-container">
            <img className="hero-image" src={screen1} alt="Spectrum Home" ></img>
            <div className="links-container">
              <ul>
                <Link to="https://github.com/james-gulland/wanderlust/" target="_blank" rel="noopener noreferrer">
                  <li className="pill active"><FontAwesomeIcon className="icon" icon={faGithub} alt="GitHub" />Link to GitHub</li>
                </Link>
              </ul>
            </div>
          </div>
        </section>

        {/* MAIN COPY */}
        <section className="portfolio-copy">
          <p className="para black">During the eighth week of the GA Software Engineering immersive course, we were tasked with developing a full-stack app from scratch using the MERN (MongoDB, Express, React.js, and Node.js) framework.</p>
          <p className="para black">The inspiration came from a cold, wet, wintery March here in the UK, and all I wanted to know is what destinations are the perfect get-away for this time of year. So, we created Wanderlust - which will automatically tell you the best destinations based on the current weather in that location, and according to what type of holiday you are looking for: heat for lying by the beach, sunny for sightseeing, milder temperatures for activities/adventure, or snow for skiing.</p>
          <p className="para black">I learnt a lot about creating a responsive grid for showing the results, creating schemas and models for the database, and integrating with Open-Meteo weather and Mapbox APIs to drive an awesome user experience.</p>
          <p className="para black">You can read up more about the full development process <span className="link link-small"><Link to="https://github.com/james-gulland/wanderlust/#readme" target="_blank" rel="noopener noreferrer">here</Link></span>.</p>
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

export default Wanderlust