import React from "react";
import './index.css';
import Game from "./Work/Game";
import Result from "./Work/Result";


const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Что такое JSX2?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 3,
  },

];


function App() {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const question = questions[step];

    const onclickVariant = (index) => {
        setStep(step + 1);

        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    };


  return (
      <div className="App">
          {step !== questions.length ? (<Game questions = {questions} step = {step} question = {question} onclickVariant = {onclickVariant}/>) :
              (<Result questions = {questions} correct = {correct}/>)}
      </div>
  );
}

export default App;