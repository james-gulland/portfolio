import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const About = () => {

  return (
    <>
      <header id="header-about">
        <Link className="profile" to={'/'} as={Link}>
          <div className="button back"><FontAwesomeIcon className="icon" icon={faArrowLeft} />All Projects</div>
        </Link>
      </header>

      <section>
        <div id="title-container">
          <h1>James Gulland</h1>
          <p className="para">Have a seat... would you like a coffee or tea, or perhaps just a water?   Haha, yes, terrible weather isn&apos;t it?!</p>
        </div>

        <div id="about-container">
          <p className="para black">Hi there, I&apos;m James and I currently live in London, where we like to complain about the weather. 
            I&apos;ve been in tech for as long as I can remember, going all the way back to the Commodore 64, playing Horace Goes Skiing (I was terrible at it).  
            My degree was in BSc Hons Business Information Technology, so basically half business, half technology.  
            From my degree, I started out programming but quickly moved into managerial roles, because I liked working with people, and then got into a love affair with product management.</p>
          
          <p className="para black">Fast forward over a decade, and I here I am now. Returning back to my roots, currently working as a software engineer. I am a full-stack software engineer with an passion for the front-end UIs.</p>
          <h2>What am I looking for?</h2>
          <p className="para black">I am looking for  </p>
        </div>
      </section>
    </>

  )

}

export default About