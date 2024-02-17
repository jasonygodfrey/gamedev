
import ThreeBackground2 from "@components/ThreeBackground2"; // Ensure this path is correct
import Link from "next/link";

const AboutComponent = () => {
  return (
    <section id="about" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <ThreeBackground2 /> 
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '20px', paddingBottom: '20px' }}>
        
        <div className="neoh_fn_about_item">
          <div className="img_item4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7e90gBu4pas1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Crafting Worlds: About Me</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                As the first hero of the Neoh Universe, collection has over
                9,999 unique skins drawn from the different missions and
                challenges he faced throughout his life.
              </p>
              <p>
                The artwork has been hand-drawn by Robert Green in the
                traditional anime style and composited by Layla Efiyo.
              </p>
            </div>
            <div className="buttons">
              <a
                href="https://github.com/jasonygodfrey"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  {/* Replace with your GitHub icon */}
                  <img src="svg/github.svg" alt="GitHub" className="fn__svg" />
                </span>
                <span className="text">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jasong7"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  {/* Replace with your LinkedIn icon */}
                  <img src="svg/linkedin.svg" alt="LinkedIn" className="fn__svg" />
                </span>
                <span className="text">LinkedIn</span>
              </a>
              <a
                href="http://jasongodfrey.dev"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="text">Web Development</span>
              </a>
              <a
                href="https://samuraistudios.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="text">Samurai Studios</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
