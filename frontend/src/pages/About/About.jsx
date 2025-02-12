import React from "react";
import { FcIdea, FcFlashOn, FcHeadset, FcGlobe } from "react-icons/fc";
import ButtonCTA from "../../components/Button/buttonCTA";
import "./About.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="container-benefits">
        <h2 className="title-bnfts">Benefits</h2>
        <div className="benefits-cards">
          <div className="card-bfts">
            <div className="icon-container">
              <FcIdea size={24}/>
            </div>
            <h3>Free and No Ads</h3>
            <p>No distractions, no adverts. Just music.</p>
          </div>
          <div className="card-bfts">
            <div className="icon-container">
              <FcFlashOn size={24}/>
            </div>
            <h3>Fast conversion</h3>
            <p>Convert YouTube videos to MP3 in seconds.</p>
          </div>
          <div className="card-bfts">
            <div className="icon-container">
            <FcHeadset size={24}/>
            </div>
            <h3>High Quality</h3>
            <p>Choose the audio quality you prefer.</p>
          </div>
          <div className="card-bfts">
            <div className="icon-container">
            <FcGlobe size={24}/>
            </div>
            <h3>Easy access</h3>
            <p>Access from any device and download your favourite music.</p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="container-black-wall">
          <div className="container-white-zone">
            <h1 className="about-title">about</h1>
          </div>
          <div className="body-text-container">
            <p className="body-text">
              <span className="vibra-word">VIBRA</span>
              <span className="liste-word">LISTE</span>
              <span className="vibra-word">N </span> 
              makes it simple to convert YouTube videos to MP3. 
              <br />
              Paste the link, click, and download 
              the audio in a few seconds, with total convenience.
            </p>
          </div>

          <div className="container-circles">
            <h1 className="title-circles">How it works?</h1>
            <div className="circle medium"> </div>
          </div>
        </div>
      </div>
      
      <div className="card-container">
            <div className="card card-1">
              <div className="card-content">
                <h3>Copy the Link</h3>
                <p>Copy the YouTube video URL</p>
              </div>
              <img src="images/image_1.svg" alt="Imagem 1"/>
            </div>

            <div className="card card-2">
              <img src="images/image_2.svg" alt="Imagem 2"/>
              <div className="card-content">
              <p>Paste the link into our tool and click on "Convert button</p>
                <h3>Paste & Convert</h3>
              </div>
            </div>
            
            <div className="card card-3">
              <div className="card-content">
                <h3>Download MP3</h3>
                <p>Download your converted MP3 file</p>
              </div>
              <img src="images/image_3.svg" alt="Imagem 3"></img>
            </div>
          </div>

      {/* Chalk arrow section */}
      <div className="chalk-arrow-container">
        <svg className="chalk-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
          <defs>
            <filter id="chalk" height="2" width="1.6" color-interpolation-filters="sRGB" y="-0.5" x="-0.3" filterUnits="objectBoundingBox">
              <feTurbulence baseFrequency="0.9" seed="115" result="result1" numOctaves="2" type="turbulence"/>
              <feDisplacementMap scale="3" yChannelSelector="G" in2="result1" xChannelSelector="R" in="SourceGraphic"/>
            </filter>
          </defs>
          <path filter="url(#chalk)" d="M 10,20 q 30,-10 60,20 m 5,5 l 2,-18 m -3,19 l -15,-5" 
            fill="none" stroke="#3d55cc" stroke-width="2" stroke-linecap="round"/>
        </svg>

        <svg className="chalk-arrow2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
          <defs>
            <filter id="chalk" height="2" width="1.6" color-interpolation-filters="sRGB" y="-0.5" x="-0.3" filterUnits="objectBoundingBox">
              <feTurbulence baseFrequency="0.9" seed="115" result="result1" numOctaves="2" type="turbulence"/>
              <feDisplacementMap scale="3" yChannelSelector="G" in2="result1" xChannelSelector="R" in="SourceGraphic"/>
            </filter>
          </defs>
          <path filter="url(#chalk)" d="M 10,20 q 30,-10 60,20 m 5,5 l 2,-18 m -3,19 l -15,-5" 
            fill="none" stroke="#3d55cc" stroke-width="2" stroke-linecap="round"/>
        </svg>

        <svg className="chalk-arrow3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
          <defs>
            <filter id="chalk" height="2" width="1.6" color-interpolation-filters="sRGB" y="-0.5" x="-0.3" filterUnits="objectBoundingBox">
              <feTurbulence baseFrequency="0.9" seed="115" result="result1" numOctaves="2" type="turbulence"/>
              <feDisplacementMap scale="3" yChannelSelector="G" in2="result1" xChannelSelector="R" in="SourceGraphic"/>
            </filter>
          </defs>
          <path filter="url(#chalk)" d="M 10,20 q 30,-10 60,20 m 5,5 l 2,-18 m -3,19 l -15,-5" 
            fill="none" stroke="#3d55cc" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>

      {/* CTA button */}
      <ButtonCTA />
    </React.Fragment>
  );
};

export default About;