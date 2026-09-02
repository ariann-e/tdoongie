import { IMAGES } from "@/constants/images";
import "./Welcome.css";

const Welcome = ({ onStart }) => {
  return (
    <main className="welcome-container">

      {/* App Logo */}
      <img
        className="home-logo"
        src={IMAGES.logo}
        alt="Logo"
      />

      {/* Main Animation + TWICE Title */}
      <div className="welcome-visual">
        <img
          className="main-anim"
          src={IMAGES.twiceanim}
          alt="TWICE"
        />

        <img
          className="main-twice"
          src={IMAGES.whichtwice}
          alt="Which TWICE member are you?"
        />
      </div>

      {/* Start Button */}
      <button
        className="main-button"
        onClick={onStart}
      >
        <img
          src={IMAGES.startbtn}
          alt="Start"
        />
      </button>

    </main>
  );
};

export default Welcome;