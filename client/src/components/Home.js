import profilePic from '../assets/me.jpg'

const Home = () => {

  return (
    <>
      <div id="intro-container">
        <div id="current-status" className="pill"><span id="pill-emoji">☻</span> Open to work</div>
        <div id="profile-pic">
          <img src={profilePic} alt="Profile" />
        </div>
        <p className="heading">Hello there!</p>
        <p id="profile-description" className="heading">I&apos;m James, a full-stack <span className="accent-colour">developer</span> with a background in product management.</p>
        <div id="contact-buttons">
          <div id="contact-email" className="button">Email</div>
          <div id="contact-email" className="button">LinkedIn</div>
        </div>
      </div>
    
    </>

  )
}

export default Home