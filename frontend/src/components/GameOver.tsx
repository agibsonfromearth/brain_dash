
interface GameOverProps {
    score: number;
}

const GameOver = ({score}: GameOverProps) => {
    return (
        <>
        {`Game Over. Your score is ${score}!`}
        </>
    )
}


export default GameOver;