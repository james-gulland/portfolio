import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonHiking, faMusic, faGamepad } from "@fortawesome/free-solid-svg-icons";
import Back from "../common/back-button";
import Thanks from "../common/thanks";
import Footer from "../common/footer";
import Meta from "../common/meta";

const About = () => {
  return (
    <>
      <Meta
        title="About"
        description="Learn more about James Gulland, his background in product and engineering, and what he is looking for next."
      />

      <header id="header-about">
        <Back />
      </header>

      <main className="copy-blocks-container">
        {/* ABOUT ME SECTION */}
        <section>
          <div id="title-container">
            <h1>James Gulland</h1>
            <p className="subtitle">
              Have a seat... Would you like a tea or coffee, or perhaps just a water? Haha, yes,
              terrible weather isn&apos;t it?
            </p>
          </div>

          <div id="about-container">
            <p className="para black">
              Hi there, I&apos;m James and I currently live in London, where we like to complain
              about the weather a lot. I&apos;ve been in tech for as long as I can remember, going
              all the way back to the Commodore 64, playing Horace Goes Skiing (I was terrible at
              it).
            </p>
            <p className="para black">
              I studied in Business Information Technology, so basically half business, half
              technology. Whilst I love technology in itself, it&apos;s the application of the
              technology to solve 'real world' problems that I am truly passionate about. Fast
              forward over a decade, I have had the prividge to work with some truly amazing
              companies and people, where I am currently honing my craft as a software engineer.
            </p>
            <p className="para black">
              I like to consider myself a product-minded engineer - someone who can wear both
              product and engineering hats. I love connecting dots. I love attention to detail. I
              love solving the right problems. Working in product has taught me the immense value
              that software engineering can bring to organisations, and I&apos;m deeply excited to
              keep progressing my coding skills whilst bringing my evident UX and business knowledge
              to the forefront.
            </p>
            <p className="para black">
              More recently, I have been adopting AI tools to facilitate my coding workflow, and I
              have been blown away by the speed and quality of the code it has generated. At the
              present, I like to use Cursor with Claude, OpenAI and Composer models to ideate
              concepts and then code them up. That said, I still strongly believe that having the
              foundational knowledge of software development is necessary to deploy production-ready
              code.
            </p>
            <h2>What am I looking for?</h2>
            <p className="para black">
              That is a bit of a deep, existential question, isn&apos;t it?! Oh... you mean
              job-wise? Well, I am looking for a frontend-leaning engineer role, ideally with some
              full-stack responsibilities. Somewhere I can flex my product and UX chops, whilst
              satisfying the logical side of my brain, by integrating with APIs, databases, and all
              things data.
            </p>
            <p className="para black">
              In no particular order, here are a few things I am looking for:
            </p>
            <ul className="para black">
              <li>Frontend-leaning engineer role, with some full-stack responsibilities</li>
              <li>
                Tech-stack including something like (but not limited to): React, Next.js,
                TypeScript, Tailwind, Node.js, PostgreSQL, AWS, Vercel
              </li>
              <li>
                Startup or early-stage company FTW - I love the energy and pace of smaller teams
              </li>
              <li>Permanent, contract, or freelance opportunities</li>
              <li>
                London-based with the option to work remotely. 2-3 days a week in the office is
                ideal
              </li>
            </ul>
            <p className="para black">
              Any questions, please don&apos;t hesitate to get in touch. I look forward to hearing
              from you!
            </p>
          </div>
        </section>

        {/* IMAGE SECTION */}
        <section id="me-image">
          <img
            id="swiss-screen"
            src="https://res.cloudinary.com/drrscrxod/image/upload/q_auto/f_auto/swiss_w5styf.webp"
            alt="Switzerland"
          />
        </section>

        {/* INTERESTS SECTION */}
        <section>
          <div id="interests-container">
            <h2>What do I do outside of work?</h2>
            <p className="para black">
              Need some inspiration for an ice-breaker during our interview? Look no further:
            </p>

            <div className="para black interest-icon">
              <FontAwesomeIcon
                className="icon accent-colour"
                icon={faPersonHiking}
                alt="Person Hiking"
              />
              Travelling:
            </div>
            <p className="para black">
              When I am not enjoying the delights that London has to offer, I frequently venture
              beyond borders to immerse myself in diverse cultures and lifestyles. One of my most
              cherished journeys involved a five-month expedition across Southeast Asia, where my
              brother and I embarked on an exhilarating exploration of the continent. By renting
              motorbikes, we were able to venture off the beaten path, frequently unveiling the
              hidden gems that awaited our discovery.
            </p>

            <div className="para black interest-icon">
              <FontAwesomeIcon className="icon accent-colour" icon={faMusic} alt="Person Hiking" />
              Music:
            </div>
            <p className="para black">
              I have a pretty eclectic taste in music; anything from ambient, to jazz, to
              electronica, to drum & bass. I dedicate a significant portion of my free time to
              exploring new artists and genres, scouring online shops to find unknown tracks.
              Although I may have outgrown the clubbing scene I once enjoyed, I still get a great
              deal of satisfaction in curating mixtapes for my friends.
            </p>

            <div className="para black interest-icon">
              <FontAwesomeIcon
                className="icon accent-colour"
                icon={faGamepad}
                alt="Person Hiking"
              />
              Computer Games:
            </div>
            <p className="para black">
              On the rare occasion when I find myself with a moment to spare, I like to unwind by
              playing on the PS5 or PC. Having grown up during the era of the Commodore 64, NES, and
              SNES, video games have been an integral part of my life since childhood. I have a
              particular fondness for real-time strategy (RTS) games, as well as action and
              adventure titles. Among my personal favorites are Fallout, Mario, Quake, and Skyrim.
            </p>
          </div>
        </section>

        {/* THANKS SECTION */}
        <section>
          <Thanks />
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default About;
