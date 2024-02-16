const GuaranteeListComponent = () => {
    return (
      <div className="neoh_fn_aboutpage">
        <section id="information">
          <div className="container">
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
                {/* Repeat for each item */}
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
          </div>
        </section>
      </div>
    );
};
  
export default GuaranteeListComponent;
