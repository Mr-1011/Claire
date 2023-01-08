import React, { useState } from 'react';
import '../SingleQuestion.css';

function SingleQuestion() {
  const questions = [
    {
      questionText: 'What is your gender?',
      answerOptions: [
        { answerText: 'Male', answerPoints: 0 },
        { answerText: 'Female', answerPoints: 0 },
        { answerText: 'Prefer not to say', answerPoints: 0},
      ],
    },
    {
      questionText: 'What is your age?',
      answerOptions: [
        { answerText: '19-29', answerPoints: 0},
        { answerText: '30-39', answerPoints: 0},
        { answerText: '40-49', answerPoints: 0},
        { answerText: '50-59', answerPoints: 0},
        { answerText: '60+', answerPoints: 0},
      ],
    },
    {
      questionText: 'How long have you had your license for?',
      answerOptions: [
        { answerText: 'less than 2 years', answerPoints: 0 },
        { answerText: '2-5 years', answerPoints: 3 },
        { answerText: '5 years or more', answerPoints: 5 },
      ],
    },
    {
      questionText: 'How many years have you been driving?',
      answerOptions: [
        { answerText: 'less than 2 years', answerPoints: 0 },
        { answerText: '2-5 years', answerPoints: 3 },
        { answerText: '5 years or more', answerPoints: 5 },
      ],
    },
    {
      questionText: 'How many times you drive per week?',
      answerOptions: [
        { answerText: 'less than 2 times', answerPoints: 0 },
        { answerText: '2-5 times', answerPoints: 3 },
        { answerText: '5 times or more', answerPoints: 5 },
      ],
    },
    {
      questionText: 'Have you already had experience with a AD?',
      answerOptions: [
        { answerText: 'None or very litte', answerPoints: 0 },
        { answerText: 'Basic knowledge', answerPoints: 3 },
        { answerText: 'Advanced knowledge', answerPoints: 5 },
      ],
    },
    {
      questionText: 'Do you have any knowledge of AD/DL?',
      answerOptions: [
        { answerText: 'None or very litte', answerPoints: 0 },
        { answerText: 'Basic knowledge', answerPoints: 3 },
        { answerText: 'Advanced knowledge', answerPoints: 5 },
      ],
    },
    {
      questionText: 'Do you have any perceived risks?',
      answerOptions: [
        { answerText: 'I’m afraid AD has security issues', answerPoints: 0 },
        { answerText: 'I’m afraid AD might be out of control', answerPoints: 0},
        { answerText: 'I’m afraid AD will not give explanation about its decisions', answerPoints: 0},
        { answerText: 'I’m afraid bad communications network and other factors might influence driving', answerPoints: 0},
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
          You scored {score} out of 30! Your assistance level is identified as Level 2 Complete Visual and basic Audio Assistance.
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