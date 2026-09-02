import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { useEffect, useState } from "react";

import Welcome from "./pages/Welcome";
import MeetTwice from "./pages/MeetTwice";
import Quiz from "./components/Quiz";
import NameModal from "./components/NameModal";

function AppContent() {
  const navigate = useNavigate();

  const [showNameModal, setShowNameModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / 360;
      const scaleY = window.innerHeight / 800;

      const scale = Math.min(scaleX, scaleY);

      document.documentElement.style.setProperty(
        "--app-scale",
        scale
      );
    };

    updateScale();

    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  const handleSaveName = (name) => {
    localStorage.setItem("userName", name);

    setShowNameModal(false);

    navigate("/meetTwice");
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div className="app">

      {/* 360 × 800 Application */}
      <div className="app-design">

        <Routes>

          <Route
            path="/"
            element={
              <Welcome
                onStart={() => setShowNameModal(true)}
              />
            }
          />

          <Route
            path="/meetTwice"
            element={
              <MeetTwice
                onStartQuiz={handleStartQuiz}
              />
            }
          />

          <Route
            path="/quiz"
            element={<Quiz />}
          />

        </Routes>

      </div>


      {/* Full-screen Name Modal */}
      {showNameModal && (
        <NameModal
          onSave={handleSaveName}
          onClose={() => setShowNameModal(false)}
        />
      )}


      {/* Full-screen Quiz Modal */}
     {showQuiz && (
  <div className="quiz-overlay">
    <Quiz
      onClose={() => setShowQuiz(false)}
    />
  </div>
)}

    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;