import { useState } from "react";
import { questions } from "../data/questions";
import { members } from "../data/members";

import { IMAGES } from "@/constants/images";

import Question from "./Question";
import Result from "./Result";

import "./Quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [result, setResult] = useState(null);

  // Background for each question
  const quizBackgrounds = [
    IMAGES.quizbg1,
    IMAGES.quizbg2,
    IMAGES.quizbg3,
    IMAGES.quizbg4,
    IMAGES.quizbg5,
    IMAGES.quizbg6,
    IMAGES.quizbg7,
    IMAGES.quizbg8,
    IMAGES.quizbg9,
  ];

  const handleAnswer = (selectedMembers) => {
    const updatedScores = { ...scores };

    selectedMembers.forEach((member) => {
      updatedScores[member] =
        (updatedScores[member] || 0) + 1;
    });

    setScores(updatedScores);

    const isLastQuestion =
      currentQuestion === questions.length - 1;

    if (isLastQuestion) {
      calculateResult(updatedScores);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const calculateResult = (finalScores) => {
    let highestScore = -1;
    let winningMember = null;

    members.forEach((member) => {
      const score = finalScores[member.id] || 0;

      if (score > highestScore) {
        highestScore = score;
        winningMember = member;
      }
    });

    setResult(winningMember);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScores({});
    setResult(null);
  };

  if (result) {
    return (
      <Result
        member={result}
        onRestart={restartQuiz}
      />
    );
  }

  const question = questions[currentQuestion];

  return (
  <div
    className="quiz-modal"
    style={{
      backgroundImage: `url(${quizBackgrounds[currentQuestion]})`,
    }}
  >
    <Question
      question={question}
      onAnswer={handleAnswer}
    />
  </div>
);
};

export default Quiz;