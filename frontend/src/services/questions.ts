import axios from 'axios';
import { Questions } from '../types';



const getAll = async (category: string, difficulty: string) => {
   const { data } = await axios.get<Questions[]>(`https://the-trivia-api.com/v2/questions?limit=4&categories=${category}&difficulties=${difficulty}`);

   console.log(data);

   return data;
}

export default getAll;