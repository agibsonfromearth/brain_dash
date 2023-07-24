import { useState } from 'react';
import Start from './components/Start';
import Game from './components/Game';




function App() {
  // const [category, setCategory] = useState()
  // const [limit, setLimit] = 0;
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');



  return (
    <>
    <h1>Brain Dash</h1>
    <Start
      category={category}
      difficulty={difficulty}
      setCategory={setCategory}
      setDifficulty={setDifficulty}
    />
    <Game/>
    </>
      
     
    
  );
}

export default App;
