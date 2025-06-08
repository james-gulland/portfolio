import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import Back from './Back'
import SkillPill from './SkillPill'
import Thanks from './Thanks'
import Footer from './Footer'
import screen1 from '../assets/battleships-1.png'

const Battleships = () => {

  const selectedSkills = ['JavaScript', 'HTML5', 'SASS']

  return (
    <>
      <header id="header-about">
        <Back />
      </header>

      <main>
        {/* TITLE */}
        <section>
          <div id="title-container">
            <h1>Celebrity Battleships</h1>
            <p className="para">A tongue-in-cheek remake of the classic battleships game, built with JavaScript, HTML5 and CSS</p>
          </div>

          {/* HERO AREA */}
          <div className="portfolio-hero-container">
            <img className="hero-image" src={screen1} alt="Spectrum Home" ></img>
            <div className="links-container">
              <ul>
                <Link to="https://james-gulland.github.io/battleships/" target="_blank" rel="noopener noreferrer">
                  <li className="pill active"><FontAwesomeIcon className="icon" icon={faEarthAmericas} alt="GitHub" />Link to Website</li>
                </Link>
                <Link to="https://github.com/james-gulland/battleships/" target="_blank" rel="noopener noreferrer">
                  <li className="pill active"><FontAwesomeIcon className="icon" icon={faGithub} alt="GitHub" />Link to GitHub</li>
                </Link>
              </ul>
            </div>
          </div>
        </section>

        {/* MAIN COPY */}
        <section className="portfolio-copy">
          <p className="para black">The first GA Software Engineering immersive course project was in week 4 of the course, with the brief of creating a Battleships game using JavaScript, HTML and CSS.</p>
          <p className="para black">I learnt a lot about streamlined, readable, and reusable code, by implementing objects, functions and methods in JavaScript, as well as had some fun with HTML5 and CSS techniques.</p>
          <p className="para black">You can read up more about the full development process <span className="link link-small"><Link to="https://github.com/james-gulland/battleships/#readme" target="_blank" rel="noopener noreferrer">here</Link></span>.</p>
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

export default Battleships