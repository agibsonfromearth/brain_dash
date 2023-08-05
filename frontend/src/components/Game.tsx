import React, { SetStateAction, Dispatch} from "react";
import { Questions } from "../types";
import Timer from "./Timer";
import nextId from "react-id-generator";



interface GameProps {
    questions: Questions[];
    currentQuestion: number;
    setCurrentQuestion: Dispatch<SetStateAction<number>>;
    score: number;
    setScore: Dispatch<SetStateAction<number>>;
    display: string;
    setDisplay: Dispatch<SetStateAction<string>>;
}

const Game = ({questions, currentQuestion, setCurrentQuestion, score, setScore, display, setDisplay }: GameProps) => {

//combine 'correct answer' and 'incorrect answers' into an array and sort it randomly
    const mergeQuestions = [...questions[currentQuestion]?.incorrectAnswers || [],  ...(questions[currentQuestion]?.correctAnswer ? [questions[currentQuestion].correctAnswer] : [])].sort(() => Math.random() - 0.5);

    const updateScore = (answer: string): void => {
        setScore(prev => prev + 1);
        console.log(`${answer} is correct!`);
        setDisplay(`${answer} is correct!`);
        clearDisplay();
    }

    const wrongAnswer = (answer: string) => {
        setDisplay(`${answer} is wrong!`);
        clearDisplay();
    }

  
    const handleAnswer = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.currentTarget.value === questions[currentQuestion].correctAnswer ? updateScore(e.currentTarget.value) :
        wrongAnswer(e.currentTarget.value);
        currentQuestion < (questions.length - 1) ? setCurrentQuestion(++currentQuestion) : console.log('test done!');  
    }

    const clearDisplay = () => {
        window.setTimeout(() => {
            setDisplay('')
        }, 600);
    }
  

    return (
        //if questions retrieved from api
        //develop game screen below which will show when 'play now' pressed
        <>
        <div className="game-container">
        <p className="category">Category: History</p>
        <Timer/>
        <p>Score: {score}</p>
        <h3>{display}</h3>
        <p className="question-display">{questions[currentQuestion]?.question.text}</p>
            
            <div className="choices">
                <label htmlFor="">
                    <ol>
        
                    {
                    mergeQuestions.map(answer => (
                        <li key={nextId()}><input type='button' className='choices' value={answer} onClick={handleAnswer}></input></li>
                    ))}                        
                    </ol>
                   
                </label>
            </div>
         

        </div>
        
        </>
    )
}


export default Game;