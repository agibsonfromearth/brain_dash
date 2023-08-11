import { useState, useEffect } from 'react';
import Start from './components/Start';
import Game from './components/Game';
import Timer from './components/Timer';
import { Questions } from './types';
import GameOver from './components/GameOver';


function App() {

  const [questions, setQuestions] = useState<Questions[]>([]);
  const [playPressed, setPlayPressed] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const [time, setTime] = useState(10);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    if (time === 0) {
      setTimeExpired(true);
    }

   
  }, [time]);


  return (
  <>
      <h1>Brain Dash</h1>
      
      {timeExpired ? 
        <GameOver
          score={score}
          setPlayPressed={setPlayPressed}
          setTimeExpired={setTimeExpired}
          setTime={setTime} 
        />
      : playPressed ? (
        <>
          <Timer
            time={time}
            setTime={setTime}
          />
          <Game 
            questions={questions}
            score={score}
            setScore={setScore} 
            />
        </>
      ) : (
        <Start
          setQuestions={setQuestions}
          playPressed={playPressed}
          setPlayPressed={setPlayPressed}
        />
      )}
    </>
  )
}

export default App;
