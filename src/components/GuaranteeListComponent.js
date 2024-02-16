import React from 'react';

const GuaranteeListComponent = () => {
  return (
    <div className="neoh_fn_aboutpage">
      <section id="information">
        <div className="container">
          <div className="neoh_fn_title">
            <h3 className="fn_title">/inv Me</h3>
            <div className="line">
              <span />
            </div>
          </div>
          <div className="neoh_fn_gualist">
            <ul>
              <li>
                <div className="item">
                  <span className="line"></span>
                  <div className="icon">
                    <img src="svg/search-engine.svg" alt="" className="fn__svg" />
                  </div>
                  <h3 className="fn_title">Transparency</h3>
                  <p className="fn_desc fn_animated_text" style={{ color: 'white' }}>
                    Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est.
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <span className="line"></span>
                  <div className="icon">
                    <img src="svg/management.svg" alt="" className="fn__svg" />
                  </div>
                  <h3 className="fn_title">Experienced Team</h3>
                  <p className="fn_desc fn_animated_text" style={{ color: 'white' }}>
                    Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est.
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <span className="line"></span>
                  <div className="icon">
                    <img src="svg/padlock.svg" alt="" className="fn__svg" />
                  </div>
                  <h3 className="fn_title">Security Guarantee</h3>
                  <p className="fn_desc fn_animated_text" style={{ color: 'white' }}>
                    Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="neoh_fn_skills">
            <h3 className="fn_title">Skills</h3>
            <p className="fn_desc">
              Here, you can talk about your skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vitae pulvinar lorem.
            </p>
          </div>

          {/* Contact Section */}
          <div className="neoh_fn_contact">
            <h3 className="fn_title">Contact</h3>
            <div className="icons">
              {/* Replace these img src with your actual icon paths */}
              <img src="svg/icon1.svg" alt="Icon 1" />
              <img src="svg/icon2.svg" alt="Icon 2" />
              <img src="svg/icon3.svg" alt="Icon 3" />
              <img src="svg/icon4.svg" alt="Icon 4" />
              <img src="svg/icon5.svg" alt="Icon 5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuaranteeListComponent;
