import {useEffect, Dispatch, SetStateAction} from "react"

interface TimerProps {
    time: number;
    setTime:  Dispatch<SetStateAction<number>>;
   
}

const Timer = ({time, setTime}: TimerProps) => {
  
      

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => {
                if (prev === 1) {
                    clearInterval(interval);
                    console.log('time expired');
                }
                return prev - 1;
            });
        }, 1000)


        return () => {
            clearInterval(interval);
            console.log('timer unmounted');
        }
    }, [])


    return (
        <>
        <p>Time Remaining: {time}</p>
        </>
    )
}

export default Timer