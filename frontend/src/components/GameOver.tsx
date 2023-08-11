import { Dispatch, SetStateAction } from "react";


interface GameOverProps {
    score: number;
    setPlayPressed: Dispatch<SetStateAction<boolean>>;
    setTimeExpired: Dispatch<SetStateAction<boolean>>;
    setTime: Dispatch<SetStateAction<number>>;
}

const GameOver = ({score, setPlayPressed, setTimeExpired, setTime}: GameOverProps) => {

    
    const restartGame = () => {
            setPlayPressed(prev => !prev);
            setTimeExpired(prev => !prev);
            setTime(10);
        }

    return (
        <>
        {`Game Over. Your score is ${score}!`}
        <button onClick={restartGame}>Play Again</button>
        </>
    )
}


export default GameOver;