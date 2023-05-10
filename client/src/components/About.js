import Back from './Back'
import swiss from '../assets/swiss.png'

const About = () => {

  return (
    <>
      <header id="header-about">
        <Back />
      </header>

      <section>
        <div id="title-container">
          <h1>James Gulland</h1>
          <p className="para">Have a seat... would you like a coffee or tea, or perhaps just a water?   Haha, yes, terrible weather isn&apos;t it?</p>
        </div>

        <div id="about-container">
          <p className="para black">Hi there, I&apos;m James and I currently live in London, where we like to complain about the weather a lot. 
            I&apos;ve been in tech for as long as I can remember, going all the way back to the Commodore 64, playing Horace Goes Skiing (I was terrible at it).  
            I studied in Business Information Technology, so basically half business, half technology.  
            From my degree, I started out programming but quickly moved into managerial roles, because I like working with people, and then got into a love affair with product management.</p>
          
          <p className="para black">Fast forward over a decade, I have had the privilege to work with some truly amazing developers, who have inspired me to start a coding career of my own. Returning back to my roots, I am currently transitioning to become a full-stack software engineer, with a passion for clean and functional UIs.</p>
          <h2>What am I looking for?</h2>
          <p className="para black">That is a bit of a deep, existential question, isn&apos;t it?!  Oh... you mean job-wise?  Well, I am looking for a full-stack role with an emphasis on the front-end; somewhere I can flex my product and UX chops, whilst satisfying the logical side of my brain, by integrating with APIs, databases, and all things data.</p>
          <p className="para black">I love connecting dots. I love attention to detail. I love solving the right problems.
          Working in product has taught me the immense value that software engineering can bring to organisations, and I&apos;m deeply excited to keep progressing my full-stack coding skills whilst bringing my evident UX and business knowledge to the forefront.</p>
          <p className="para black">I will need a little bit of support whilst I get to grips with the tech that is new to me, but I feel at home here, and I am a quick learner. I can&apos;t wait to meet you and I can&apos;t wait to start!</p>
        </div>
      </section>
      
      {/* IMAGE SECTION */}
      <section id="me-image">
        <img id="swiss-screen" src={swiss} alt="Switzerland" />
      </section>
    </>

  )

}

export default About