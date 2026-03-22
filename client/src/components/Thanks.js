import Contact from "./Contact";

const Thanks = () => {
  return (
    <div id="thanks-container">
      <div id="profile-pic">
        <img
          src="https://res.cloudinary.com/drrscrxod/image/upload/c_scale,w_500/q_auto/f_auto/me_exxbpi.webp"
          alt="Profile"
        />
      </div>
      <div id="thanks-copy-container">
        <h3>Thank you!</h3>
        <p className="tile-text">
          Thanks for making it down this far. It was quite the journey! Hit me up using the links
          below to contact me for developer roles. Muchas gracias.
        </p>
        <div className="contact-buttons">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Thanks;
