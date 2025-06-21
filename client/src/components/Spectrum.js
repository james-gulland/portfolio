import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import Back from './Back'
import SkillPill from './SkillPill'
import Thanks from './Thanks'
import Footer from './Footer'
import screen1 from '../assets/spectrum-1.png'

const Spectrum = () => {

  const selectedSkills = ['React', 'HTML5', 'SASS', 'Python', 'Django', 'PostgreSQL']

  return (
    <>
      <header id="header-about">
        <Back />
      </header>

      <main>
        {/* TITLE */}
        <section>
          <div id="title-container">
            <h1>spectrum</h1>
            <p className="para">Music app that brings together all your favourite mixes from around the web, including Soundcloud and Youtube</p>
          </div>

          {/* HERO AREA */}
          <div className="portfolio-hero-container">
            <img className="hero-image" src={screen1} alt="Spectrum Home" ></img>
            <div className="links-container"> 
              <ul>
                <Link to="https://github.com/james-gulland/spectrum/" target="_blank" rel="noopener noreferrer">
                  <li className="pill active"><FontAwesomeIcon className="icon" icon={faGithub} alt="GitHub" />Link to GitHub</li>
                </Link>
              </ul>
            </div>
          </div>
        </section>

        {/* MAIN COPY */}
        <section className="portfolio-copy">
          <p className="para black">During the final two weeks of the GA Software Engineering immersive course, I was tasked with developing a full-stack app from scratch using a Python Django API and Django REST framework to serve data from a Postgres database, which was then consumed by a separate front-end build with React and SASS.</p>
          <p className="para black">I came up with the idea of a project I have always wanted to do; create a music app where I can bring together all my favourite mixtapes from around the web, from different sources such as Soundcloud and Youtube, and then filter down by whatever mood I am in. It is more geared toward 1hr+ mixes, rather than individual tracks or albums, so you can get really lost in the music.</p>
          <p className="para black">I took a lot inspiration from an old app I used to use back in the day, Winamp, and gave it a really clean and modern but retro feel to it. In a world where every music app wants to look like Spotify, I decided to do a twist on the formula, with a fresh new neumorphic design.</p>
          <p className="para black">It is a fully complete product with multiple relationships and CRUD functionality, API integrations with 3rd party services such as Youtube and Soundcloud, and a fully mobile responsive design.</p>
          <p className="para black">You can read up more about the full development process <span className="link"><Link to="https://github.com/james-gulland/spectrum/#readme" target="_blank" rel="noopener noreferrer">here</Link></span>.</p>
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

export default Spectrum