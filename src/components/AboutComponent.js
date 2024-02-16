import Link from "next/link";
import ThreeBackground2 from "@components/ThreeBackground2"; // Ensure this path is correct

const AboutComponent = () => {
  return (
    <section id="about" style={{ position: 'relative' }}>
      {/* Position ThreeBackground absolutely to cover the whole section */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <ThreeBackground2 />
      </div>

      {/* Content container with higher zIndex to overlay on the ThreeBackground */}
      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '20px', paddingBottom: '20px' }}>
        {/* This padding is added to ensure content does not overlay directly on top of the section edges */}
        
        <div className="neoh_fn_about_item">
          <div className="img_item4">
            {/* Iframe or other content here */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7e90gBu4pas"
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
                href="https://opensea.io/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/opensea.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">OpenSea</span>
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Discord</span>
              </a>
              
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        {/* Uncomment and modify this section as needed */}
        {/* <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/about/2.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">High Quality NFT Collection</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Simply holding a Neoh will give you access to seasonal airdrops,
                merchandise, physical and digital artworks, collectibles, and
                more.
              </p>
              <p>
                We understand the importance of the cross-over between these
                worlds and we truly believe in bridging these two together. Our
                goals will always be for the community - creating, building, and
                innovating together with the community.
              </p>
            </div>
            <div className="buttons">
              <Link legacyBehavior href="/about">
                <a className="neoh_fn_button only_text">
                  <span className="text">More About US</span>
                </a>
              </Link>
            </div>
          </div>
        </div> */}
        {/* !About Item #2 */}
      </div>
    </section>
  );
};

export default AboutComponent;
