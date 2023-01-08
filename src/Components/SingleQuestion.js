import React, { useState } from 'react';
import '../App.css';
import ClaireGif from '../img/Claire.gif'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

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
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleAnswerOptionClick = (answerPoints) => {
    setScore(score + answerPoints);
    const nextQuestion = currentQuestion + 1;
    setProgress(progress + 100 / questions.length);

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      //what happens after the questions are finished
    }
  };

  return (


    <div style={{ marginTop: "20px" }}>
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
  )
}

export default SingleQuestion