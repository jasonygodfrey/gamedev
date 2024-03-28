import AboutComponent from "@components/AboutComponent";
import BlogComponent from "@components/BlogComponent";
import Drops from "@components/Drops";
import ServicesComponent from "@components/ServicesComponent";
import WhyChooseUsComponent from "@components/WhyChooseUsComponent";
import Layout from "../layout/Layout";
import ThreeBackground from "@components/ThreeBackground"; // Adjust the import path according to your project's structure
import React, { useState } from 'react';



const Index = () => {
  const [showAbout, setShowAbout] = useState(false);

  
  return (
    <Layout pageName={"Game Dev Portfolio"}>
      {/* Hero Header */}
      <div className="neoh_fn_hero">
        {/* Overlay (of hero header) */}
        <div className="bg_overlay">
          {/* Overlay Color */}
         {/* <div className="bg_color" />*/}
          <ThreeBackground />

          {/* !Overlay Color */}
          {/* Overlay Image 
          <div className="bg_image" data-bg-img="img/hero/bg.jpg" /> */}
          {/* !Overlay Image */}
        </div>
        {/* Overlay (of hero header) */}
        <div className="hero_content">
          <div className="container">
            <div className="content">
         {/*     <h2
                className="fn_title"
                title=""
                style={{
                  // Inline styles here won't change on hover
                  cursor: 'default', // Ensures the cursor doesn't change, if that's part of the hover effect
                }}
              >
                JASONG
              </h2> */}

              <p 
              className="fn_desc fn_animated_text"
              style={{
                // Inline styles here won't change on hover
                cursor: 'default', // Ensures the cursor doesn't change, if that's part of the hover effect
              }}
              >
                GAME DEV | SOFTWARE ENGINEER

              </p>
            </div>
          </div>
          <div className="buttons">
      <a
    href="http://jasongodfrey.dev"
    target="_blank"
    rel="noreferrer"
    className="neoh_fn_button"
  >
    Web Development
  </a>
  <a
    href="https://github.com/jasonygodfrey"
    target="_blank"
    rel="noreferrer"
    className="neoh_fn_button"
  >
    GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/jasong7"
    target="_blank"
    rel="noreferrer"
    className="neoh_fn_button"
  >
    LinkedIn
  </a>
  <a
    href="https://samuraistudios.vercel.app"
    target="_blank"
    rel="noreferrer"
    className="neoh_fn_button"
  >
    Samurai Studios
  </a>
  <a
              onClick={() => setShowAbout(true)}

    target="_blank"
    rel="noreferrer"
    className="neoh_fn_button"
  >
    about
  </a>
</div>
          
          {/*
<div className="fade-in">
  <a
    href="#about"
    className="neoh_fn_down magic-hover magic-hover__square"
  >
    <span className="text">Scroll Down</span>
    <span className="icon">
      <img src="svg/right-arr.svg" alt="" className="fn__svg" />
    </span>
  </a>
</div>*/}
        </div>
      </div>
      {/* !Hero Header */}
      

      {/* About Section */}
      {showAbout && <AboutComponent />}
      {/* !About Section */}
      <section id="video">
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
          {/* Video Shortcode */}
        {/*  <div className="neoh_fn_video">
            <div className="bg_overlay">
              <div className="bg_image" data-bg-img="img/hero/bg.jpg" />
              <div className="bg_color" />
            </div>
            <div className="v_content">
              <a
                className="popup-youtube"
                href="//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
              >
                <img src="svg/play.svg" alt="" className="fn__svg" />
              </a>
            </div>
          </div> */}
          {/* !Video Shortcode */}
        </section>
        {/* !Video Section */}
      {/* Services Section */}
      
      {/* !Services Section */}
<Drops />
    {/*  <Drops />*/}
      {/* Investor Section */}
    <WhyChooseUsComponent /> 
      {/* !Investor Section */}
      {/* Blog Section */}
     {/* <BlogComponent /> */}
    {/* <ServicesComponent /> */}
    

    </Layout>
  );
};
export default Index;
