import React, { SetStateAction, Dispatch } from "react";
import getAll from '../services/questions';
import { Questions } from "../types";


interface StartProps {
    category: string;
    difficulty: string;
    playPressed: boolean;
    setCategory: Dispatch<SetStateAction<string>>;
    setDifficulty: Dispatch<SetStateAction<string>>;
    setQuestions: Dispatch<SetStateAction<Questions[]>>;
    setPlayPressed: Dispatch<SetStateAction<boolean>>;
}

const Start = ({category, difficulty, playPressed, setCategory, setDifficulty, setQuestions, setPlayPressed}: StartProps) => {

    const handlePlay = async (): Promise<void> => {
      const getQuestions = await getAll(category, difficulty);
      setQuestions(getQuestions);
      setPlayPressed(!playPressed);
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
        <option value="arts_and_literature">Arts & Literature</option>
        <option value="film_and_tv">Film & TV</option>
        <option value="food_and_drink">Food & Drink</option>
        <option value="general_knowledge">General Knowledge</option>
        <option value="geography">Geography</option>
        <option value="history">History</option>
        <option value="music">Music</option>
        <option value="science">Science</option>
        <option value="society_and_culture">Society & Culture</option>
        <option value="sport_and_leisure">Sport & Leisure</option>
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