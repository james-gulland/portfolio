import profilePic from '../assets/me.jpg'

const Home = () => {

  return (
    <>
      <div id="intro-container">
        <div id="profile-pic">
          <img src={profilePic} alt="Profile" />
        </div>
        <p className="heading">Hello there!</p>
        <p id="profile-description" className="heading">I&apos;m James, a developer with a background in product management.</p>
      </div>
    
    </>

  )
}

export default Home