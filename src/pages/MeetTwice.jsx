import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IMAGES } from '@/constants/images';
import "./MeetTwice.css";

const MeetTwice = ({ onStartQuiz }) => {
   const [userName] = useState(
    () => localStorage.getItem("userName") || ""
  );

  return (
    <main className="meet-twice-container">

      <p className="user">Hi, {userName}!</p>

      <img
        className="meet-twice-logo"
        src={IMAGES.meettwicelogo} alt="Meet Twice"
      />
      

      <div className="members-preview">
        <img
        className="najeongmi"
        src={IMAGES.najeongmi} alt="Mina-Jeongyeon-Nayeon"
      />
      <img
        className="jichaemo"
        src={IMAGES.jichaemo} alt="Jihyo-Chaeyong-Momo"
      />
      <img
        className="saidatzu"
        src={IMAGES.saidatzu} alt="Dahyun-Sana-Tzuyu"
      />
      </div>

      <button
        className="take-quiz-button"
        onClick={onStartQuiz}
      >
        <img
          src={IMAGES.takequiz}
          alt="Take Quiz"
        />
      </button>
    </main>
  );
};

export default MeetTwice;