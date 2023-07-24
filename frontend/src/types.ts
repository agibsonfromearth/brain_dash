export interface Questions {
    category: string,
    id: string,
    tags: string[],
    difficulty: string,
    regions: string[],
    isNiche: boolean,
    question: Question,
    correctAnswer: string,
    incorrectAnswers: string[],
    type: string,
    }
    
    type Question = {
        text: string;
    }