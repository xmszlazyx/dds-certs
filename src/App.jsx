import "./App.css";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import DayOneImages from "./components/ImageCarousels/DayOneImages";
import DayTwoImages from "./components/ImageCarousels/DayTwoImages";
import GalaImages from "./components/ImageCarousels/GalaImages";
import DownloadButton from "./components/DownloadButton";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function App() {
  useEffect (()=> {
    window.ConfettiPage.play()

  })
  return (
    <>
      <div className="container">
        <img
          src="/logo-dds-esteso-01.svg"
          alt="Digital Dentistry Society logo"
          className="logo"
        />
        <h1>A Special Messsage from Our President</h1>
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
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/digitaldentistrysociety"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/digital-dentistry-society"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <h2>Friday 18th October: Digital Technologies In Daily Practice</h2>
        <DayOneImages />

        <h2>Saturday 19th October: Clinical Applications</h2>
        <DayTwoImages />

        <h2>Gala Dinner at Palazzo Borghese </h2>
        <GalaImages />
      </div>

      {/* TODO Add photo upload link to dropbox/google drive */}
    </>
  );
}

export default App;
