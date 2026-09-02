const Question = ({ question, onAnswer }) => {
  return (
    <div className="question-container">

      <h2 className="quiz-question">
        {question.question}
      </h2>

      <div className="answers">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            type="button"
            className="answer-button"
            style={{
              backgroundImage: answer.background
                ? `url("${answer.background}")`
                : "none",
            }}
            onClick={() => onAnswer(answer.members)}
          >
            {answer.text}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Question;