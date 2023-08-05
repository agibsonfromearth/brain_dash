import { useState } from 'react';
import Start from './components/Start';
import Game from './components/Game';
import { Questions } from './types';




function App() {

  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [playPressed, setPlayPressed] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [display, setDisplay] = useState('');
  



  return (
    <>
    <h1>Brain Dash</h1>
    
    {
      playPressed ?
      <Game questions={questions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        score={score}
        setScore={setScore}
        display={display}
        setDisplay={setDisplay}
        /> :
      <Start
        category={category}
        difficulty={difficulty}
        setCategory={setCategory}
        setDifficulty={setDifficulty}
        setQuestions={setQuestions}
        playPressed={playPressed}
        setPlayPressed={setPlayPressed}
       
      />
    }
    </>
    
  );
}

export default App;
