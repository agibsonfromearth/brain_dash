import { useState, useEffect } from "react"



const Timer = () => {
    // move this up into App.tsx
    const [time, setTime] = useState(30)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => {
                if (prev === 1) {
                    console.log('times up');
                    clearInterval(interval);
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