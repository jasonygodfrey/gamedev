import GuaranteeListComponent from "@components/GuaranteeListComponent"; // Adjust the import path according to your project's structure

const WhyChooseUsComponent = () => {
  return (
    <section id="investor">
      {/* Dividers */}
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Partners</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Investor List Shortcode */}
        <div className="neoh_fn_investor" style={{ textAlign: 'center' }}>
          <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '0 10px' }}> {/* Adjust margins as needed */}
              <div className="item">
                <img src="img/investors/1.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li style={{ margin: '0 10px' }}> {/* Adjust margins as needed */}
              <div className="item">
                <img src="img/investors/2.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li style={{ margin: '0 10px' }}> {/* Adjust margins as needed */}
              <div className="item">
                <img src="img/investors/3.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
          </ul>
        </div>
        {/* !Investor List Shortcode */}
        <GuaranteeListComponent />
      </div>
    </section>
  );
};

export default WhyChooseUsComponent;
