import "./App.css";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import DownloadButton from "./components/DownloadButton";
import ImageCarouselCollection from "./components/ImageCarouselCollection";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function App() {
  useEffect(() => {
    if (window.ConfettiPage) {
      window.ConfettiPage.play();

      // Remove the script tag after the confetti plays to prevent issues
      setTimeout(() => {
        const confettiScript = document.querySelector(
          'script[src="https://run.confettipage.com/here.js"]'
        );
        if (confettiScript) {
          confettiScript.remove(); // Remove the script after a delay
        }
      }, 5000); // Adjust delay based on confetti duration
    }
  }, []);

  return (
    <>
      <div className="container">
        <img
          src="/logo-dds-esteso-01.svg"
          alt="Digital Dentistry Society logo"
          className="logo"
        />
        <h1>A Special Message from Our President</h1>
        <ReactPlayer
          url="/Francesco - Thank You Message 2024.mp4"
          controls={true}
          className="video"
          width={`100%`}
          height={`100%`}
        />

        <DownloadButton />

        <div className="social-media">
          <a
            href="https://facebook.com/DigitalDentistrySociety"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/digitaldentistrysociety"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/digital-dentistry-society"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <ImageCarouselCollection />
      </div>
    </>
  );
}

export default App;
