import React, { useState } from 'react';
import '../SingleQuestion.css';

function SingleQuestion() {
  const questions = [
    {
      questionText: 'How long have you had your license for?',
      answerOptions: [
        { answerText: '2 years', answerPoints: 1 },
        { answerText: '5 years', answerPoints: 2 },
        { answerText: '10 years', answerPoints: 3 },
        { answerText: '20 years or more', answerPoints: 4 },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', answerPoints: 1 },
        { answerText: 'Elon Musk', answerPoints: 2 },
        { answerText: 'Bill Gates', answerPoints: 3 },
        { answerText: 'Bill Gates', answerPoints: 4 },
      ],
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (answerPoints) => {
    setScore(score + answerPoints);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button className='question-button' onClick={() => handleAnswerOptionClick(answerOption.answerPoints)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default SingleQuestion