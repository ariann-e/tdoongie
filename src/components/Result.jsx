import { useRef } from "react";
import html2canvas from "html2canvas";
import "./Result.css";
import { IMAGES } from "@/constants/images";

const Result = ({ member, onRestart }) => {
  const resultCardRef = useRef(null);

  const downloadResult = async () => {
    if (!resultCardRef.current) return;

    const canvas = await html2canvas(resultCardRef.current, {
      backgroundColor: "#ffffff",
      scale: 2,
    });

    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = `twice-result-${member.id}.png`;

    link.click();
  };

  return (
    <main className="result-page">

      {/* Full-screen overlay */}
      <div className="result-overlay">

        {/* Result Card */}
        <div
          ref={resultCardRef}
          className="result-card"
        >

          <div className="result-image-container">
            <img
              className="result-member-image"
              src={member.image}
              alt={member.name}
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="result-buttons">

          <button
            className="download-button"
            onClick={downloadResult}
          >
            <img
              src={IMAGES.savebtn}
              alt="Save"
            />
          </button>

          <button
            className="restart-button"
            onClick={onRestart}
          >
            <img
              src={IMAGES.trybtn}
              alt="Try Again"
            />
          </button>

        </div>

      </div>

    </main>
  );
};

export default Result;