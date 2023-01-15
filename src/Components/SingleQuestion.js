import React, { useState } from 'react';
import '../App.css';
import ClaireGif from '../img/Claire.gif'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Profile from './Profile';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  width: '1150px',
  margin: 'auto',
  colorPrimary: '#582CED',
  backgroundColor: '#242528',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'white',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#582CED',
  },
}));


function SingleQuestion() {
  const questions = [
    {
      questionText: 'How long have you had your driving license for?',
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
      questionText: 'How often do you drive per week?',
      answerOptions: [
        { answerText: 'less than 2 times', answerPoints: 0 },
        { answerText: '2-5 times', answerPoints: 3 },
        { answerText: '5 times or more', answerPoints: 5 },
      ],
    },
    {
      questionText: 'Do you have any perceived risks when driving autonomous cars?',
      answerOptions: [
        { answerText: 'I’m afraid AD has security issues', answerPoints: 0 },
        { answerText: 'I’m afraid AD might be out of control', answerPoints: 0 },
        { answerText: 'I’m afraid AD will not give explanation about its decisions', answerPoints: 0 },
        { answerText: 'I’m afraid bad communications network and other factors might influence driving', answerPoints: 0 },
      ],
    },
    {
      questionText: 'Have you already had experience with the autonomous vehicle?',
      answerOptions: [
        { answerText: 'None', answerPoints: 0 },
        { answerText: 'A little', answerPoints: 3 },
        { answerText: 'A lot', answerPoints: 5 },
      ],
    },
    {
      questionText: 'Do you have technical knowledge about autonomous driving?',
      answerOptions: [
        { answerText: 'None or very litte', answerPoints: 0 },
        { answerText: 'Basic knowledge', answerPoints: 3 },
        { answerText: 'Advanced knowledge', answerPoints: 5 },
      ],
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showSection, setshowSection] = useState(true)

  const handleAnswerOptionClick = (answerPoints) => {
    setScore(score + answerPoints);
    const nextQuestion = currentQuestion + 1;
    setProgress(progress + 100 / questions.length);

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setshowSection(false);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {showSection ? (
        <div>
          <BorderLinearProgress variant="determinate" value={progress} />
          <div style={{ display: "flex", margin: "30px 0px 0px 50px" }}>
            <div className='morph__div__small'>
              {questions[currentQuestion].questionText}
              <div style={{ position: "absolute", bottom: "10px", right: "50%", transform: "translate(50%,0)" }}>
                <img alt={"..."} src={ClaireGif} style={{ width: "100px", height: "100", borderRadius: "100%" }}></img>
              </div>
            </div>
            <div style={{ width: "800px" }}>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button className='morph__button' style={{ margin: "0px 0px 50px 35px" }} onClick={() => handleAnswerOptionClick(answerOption.answerPoints)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Profile score={score} />
        </div>
      )}
    </div>
  )
}

export default SingleQuestion