import React, { SetStateAction, Dispatch } from "react";
import getAll from '../services/questions';


interface Props {
    category: string;
    difficulty: string;
    setCategory: Dispatch<SetStateAction<string>>;
    setDifficulty: Dispatch<SetStateAction<string>>;
}

const Start = ({category, difficulty, setCategory, setDifficulty}: Props) => {

    const handlePlay = (): void => {
        getAll(category, difficulty);
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        e.preventDefault();
        // console.log((e.currentTarget as HTMLSelectElement).value);
        // console.log((e.currentTarget as HTMLSelectElement).name)

        switch((e.currentTarget as HTMLSelectElement).name) {
            case 'QuizCategory':
                setCategory((e.currentTarget as HTMLSelectElement).value);
                break;
            case 'QuizDifficulty':
                setDifficulty((e.currentTarget as HTMLSelectElement).value);
                break;
            default:
                console.log('handle game mode');
        }
    }

    return (
        <div className='start-component'>
        <h3>Welcome to Biggest Brain! Test your knowledge and gain the highest score within the selected time limit. Brag to your friends!</h3>
        <p>Category</p>
        <div className='select-category'>
        <fieldset>
        <label htmlFor="QuizCategory">Select Your Quiz Category:</label>
        <select name='QuizCategory' onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        <option value="Arts & Literature">Arts & Literature</option>
        <option value="Film & TV">Film & TV</option>
        <option value="Food & Drink">Food & Drink</option>
        <option value="General Knowledge">General Knowledge</option>
        <option value="Geography">Geography</option>
        <option value="History">History</option>
        <option value="Music">Music</option>
        <option value="Science">Science</option>
        <option value="Society & Culture">Society & Culture</option>
        <option value="Sport & Leisure">Sport & Leisure</option>
        </select>
        </fieldset>
        </div>

        <div className='select-difficulty'>
            <p>Difficulty</p>
            <fieldset>
            <label htmlFor="QuizDifficulty">Select Your Quiz Difficulty:</label>
            <select name='QuizDifficulty' onChange={handleChange}>
            <option value="">--Please choose an option--</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            </select>
            </fieldset>
        </div>

        <div className='game-mode'>
            <p>Game Mode</p>
            <fieldset>
                <label htmlFor='GameMode'>Select Game Mode:</label>
                <select name='GameMode'onChange={handleChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="sprint">sprint: how many can you answer in 1 minute?</option>
                    <option value="speed-test">speed: how fast can you answer 10 correct questions?</option>
                </select>
            </fieldset>
        </div>

        <div className='play-button'>
            <button onClick={handlePlay}>PLAY NOW!</button>
        </div>
        </div>
        
    )
}

export default Start;