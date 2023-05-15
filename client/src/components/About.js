import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonHiking, faMusic, faGamepad } from '@fortawesome/free-solid-svg-icons'

import Back from './Back'
import Thanks from './Thanks'
import Footer from './Footer'
import swiss from '../assets/swiss.png'

const About = () => {

  return (
    <>
      <header id="header-about">
        <Back />
      </header>

      {/* ABOUT ME SECTION */}
      <section>
        <div id="title-container">
          <h1>James Gulland</h1>
          <p className="para">Have a seat... Would you like a tea or coffee, or perhaps just a water?   Haha, yes, terrible weather isn&apos;t it?</p>
        </div>

        <div id="about-container">
          <p className="para black">Hi there, I&apos;m James and I currently live in London, where we like to complain about the weather a lot. 
            I&apos;ve been in tech for as long as I can remember, going all the way back to the Commodore 64, playing Horace Goes Skiing (I was terrible at it).  
            I studied in Business Information Technology, so basically half business, half technology.  
            From my degree, I started out programming but quickly moved into managerial roles, because I like working with people, and then got into a love affair with product management.</p>
          
          <p className="para black">Fast forward over a decade, I have had the privilege to work with some truly amazing developers, who have inspired me to start a coding career of my own. Returning back to my roots, I am currently transitioning to become a full-stack software engineer, with a passion for creating clean and functional UIs.</p>
          <h2>What am I looking for?</h2>
          <p className="para black">That is a bit of a deep, existential question, isn&apos;t it?!  Oh... you mean job-wise?  Well, I am looking for a full-stack role with an emphasis on the front-end; somewhere I can flex my product and UX chops, whilst satisfying the logical side of my brain, by integrating with APIs, databases, and all things data.</p>
          <p className="para black">I love connecting dots. I love attention to detail. I love solving the right problems.
          Working in product has taught me the immense value that software engineering can bring to organisations, and I&apos;m deeply excited to keep progressing my full-stack coding skills whilst bringing my evident UX and business knowledge to the forefront.</p>          <p className="para black">I will need a little bit of support whilst I get to grips with the tech that is new to me, but I feel at home here, and I am a quick learner. I can&apos;t wait to meet you and I can&apos;t wait to start!</p>
        </div>
      </section>
      
      {/* IMAGE SECTION */}
      <section id="me-image">
        <img id="swiss-screen" src={swiss} alt="Switzerland" />
      </section>

      {/* INTERESTS SECTION */}
      <section>
        <div id="interests-container">
          <h2>What do I do outside of work?</h2>
          <p className="para black">Need some inspiration for an ice-breaker during our interview?  Look no further:</p>

          <div className="para black interest-icon"><FontAwesomeIcon className="icon accent-colour" icon={faPersonHiking} alt="Person Hiking" />Travelling:</div>
          <p className="para black">When I am not enjoying the delights that London has to offer, I frequently venture beyond borders to immerse myself in diverse cultures and lifestyles.  One of my most cherished journeys involved a five-month expedition across Southeast Asia, where my brother and I embarked on an exhilarating exploration of the continent. By renting motorbikes, we were able to venture off the beaten path, frequently unveiling the hidden gems that awaited our discovery.</p>
          
          <div className="para black interest-icon"><FontAwesomeIcon className="icon accent-colour" icon={faMusic} alt="Person Hiking" />Music:</div>
          <p className="para black">I have a pretty eclectic taste in music; anything from ambient, to jazz, to electronica, to drum & bass.  I dedicate a significant portion of my free time to exploring new artists and genres, scouring online shops to find unknown tracks.  Although I may have outgrown the clubbing scene I once enjoyed, I still get a great deal of satisfaction in curating mixtapes for my friends.</p>

          <div className="para black interest-icon"><FontAwesomeIcon className="icon accent-colour" icon={faGamepad} alt="Person Hiking" />Computer Games:</div>
          <p className="para black">On the rare occasion when I find myself with a moment to spare, I like to unwind by playing on the PS5 or PC. Having grown up during the era of the Commodore 64, NES, and SNES, video games have been an integral part of my life since childhood. I have a particular fondness for real-time strategy (RTS) games, as well as action and adventure titles. Among my personal favorites are Fallout, Mario, Quake, and Skyrim.</p>
        </div>
      </section>

      {/* THANKS SECTION */}
      <section>
        <Thanks />
      </section>

      {/* FOOTER */}
      <Footer />
    </>

  )

}

export default About