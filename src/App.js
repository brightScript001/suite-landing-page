import React, { useEffect } from "react";
import "./style.css"; // Import your CSS file

// Import image files
import logo from "./assets/logo.svg";
import facebookIcon from "./assets/icon-facebook.svg";
import instagramIcon from "./assets/icon-instagram.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import heroLandscape from "./assets/image-hero-landscape.png";
import heroPortraitTablet from "./assets/image-hero-portrait-tablet.png";
import heroPortrait from "./assets/image-hero-portrait.png";
import jeremySmallFull from "./assets/image-jeremy-small-full.png";
import jeremySmallFull2 from "./assets/image-jeremy-small-full-2.png";

// Your React component
function App() {
  useEffect(() => {
    document.title = "suite | landing page";
  }, []);
  return (
    <div className="container-margin">
      <header className="container">
        <img className="logo" src={logo} alt="suite logo" />
        <a className="btn btn-white" href="#">
          Request Beta Access
        </a>
      </header>

      <main className="container">
        {/* hero section */}
        <section className="hero">
          <div className="hero-text-image">
            <div className="hero-text">
              <span className="text-arch"></span>
              <h1 className="heading-xl">
                A <span className="heading-xl-bold">super solution</span> for
                your <span className="heading-xl-bold">business.</span>
              </h1>
              <p className="body">
                Our marketing and sales automations help you scale your outreach
                to get more leads for your company.
              </p>
              <a className="btn btn-black" href="#">
                Request Beta Access
              </a>
            </div>

            <picture className="hero-image">
              <source media="(max-width:465px)" srcSet={heroLandscape} />
              <source media="(max-width:1080px)" srcSet={heroPortraitTablet} />
              <img
                className="hero-image-desktop"
                src={heroPortrait}
                alt="Phone Suite"
                style={{ width: "auto" }}
              />
            </picture>
          </div>

          <div className="stats">
            <div>
              <h2 className="highlight">2k +</h2>
              <p className="heading-s">Companies</p>
            </div>

            <div>
              <h2 className="highlight">8</h2>
              <p className="heading-s">Languages</p>
            </div>

            <div>
              <h2 className="highlight">1.2m</h2>
              <p className="heading-s">Leads</p>
            </div>
          </div>
        </section>
      </main>

      {/* quote section */}
      <section className="container quote" aria-label="quote">
        <picture className="quote-photo">
          <source media="(max-width:1080px)" srcSet={jeremySmallFull} />
          <img
            className="mobile-image"
            src={jeremySmallFull2}
            alt="Jeremy CTO Suite"
            style={{ width: "auto" }}
          />
        </picture>
        <div className="quote-info">
          <h2 className="heading-l">
            It just <span className="heading-l-bold">works.</span>{" "}
          </h2>
          <blockquote>
            “I really like how it is an all-in-one solution that handle many of
            the tasks that you would normally need separate tools to do the same
            job. This thing is a miracle worker.”
          </blockquote>

          <div className="profile">
            <h3 className="heading-m">Jeremy Robinson</h3>
            <p className="heading-s">CMO | Fylo</p>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="container">
        <section className="footer">
          <div>
            <img className="logo" src={logo} alt="suite logo" />
          </div>
          <p className="footer-p">Copyright - Suite</p>

          <ul className="social">
            <li>
              <a href="#">
                {" "}
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}

export default App;
