import React, { useState } from 'react';
import '../App.css';
import ClaireGif from '../img/Claire.gif'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

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
      ],
    },
    {
      questionText: 'Question 1',
      answerOptions: [
        { answerText: 'A', answerPoints: 1 },
        { answerText: 'B', answerPoints: 2 },
        { answerText: 'C', answerPoints: 3 },
      ],
    },
    {
      questionText: 'Question 2',
      answerOptions: [
        { answerText: 'A', answerPoints: 1 },
        { answerText: 'B', answerPoints: 2 },
        { answerText: 'C', answerPoints: 3 },
        { answerText: 'D', answerPoints: 3 },
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